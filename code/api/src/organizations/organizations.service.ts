import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Connection, getConnectionManager, Repository } from 'typeorm';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { Organization } from './entities/organization.entity';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectRepository(Organization)
    private organizationRepository: Repository<Organization>,
    @InjectRepository(User)
    private UserRepository: Repository<User>,
  ) {}

  async create(createOrganizationDto: CreateOrganizationDto) {
    const user = await this.UserRepository.findOne(
      createOrganizationDto.userId,
    );

    const organization = Object.assign(createOrganizationDto, {
      ...createOrganizationDto,
      users: [user],
    });
    return this.organizationRepository.save(organization);
  }

  findAll() {
    return this.organizationRepository.find();
  }

  findByUserId() {
    return this.organizationRepository.find();
  }

  findOne(id: number) {
    return this.organizationRepository.findOne(id, { relations: ['users'] });
  }

  update(id: number, updateOrganizationDto: UpdateOrganizationDto) {
    return this.organizationRepository.update(id, updateOrganizationDto as any);
  }

  remove(id: number) {
    return this.organizationRepository.softDelete(id);
  }
}
