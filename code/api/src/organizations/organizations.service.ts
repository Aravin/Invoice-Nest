import { Injectable } from '@nestjs/common';
import { InjectDataSource, InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { DataSource, Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';
import { getTenantConnection } from 'src/tenants/tenant.utils';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
    @InjectDataSource()
    private readonly connection: DataSource,
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    const user = await this.UserRepository.findOne({
      where: [{ userId: createOrganizationDto.userId }],
    });

    const organization = Object.assign(createOrganizationDto, {
      ...createOrganizationDto,
      users: [user],
    });
    const result = await this.organizationRepository.save(organization);
    const tenantId = result.organizationId;
    this.connection.query(`CREATE SCHEMA tenant_${tenantId}`);
    const tenantConnection = await getTenantConnection(`tenant_${tenantId}`);
    await tenantConnection.synchronize();
    await tenantConnection.runMigrations({ transaction: 'each' });
    await tenantConnection.destroy();

    return result;
  }

  findAll() {
    return this.organizationRepository.find();
  }

  findByUserId() {
    return this.organizationRepository.find();
  }

  findOne(id: number) {
    return this.organizationRepository.findOne({
      where: [{ organizationId: id }],
      relations: ['users'],
    });
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationRepository.update(id, updateOrganizationDto as any);
  }

  remove(id: number) {
    return this.organizationRepository.softDelete(id);
  }
}
