import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { Tenant } from './entities/tenant.entity';
import { getTenantConnection } from './tenant.utils';

@Injectable()
export class TenantsService {
  constructor(
    @InjectRepository(Tenant)
    private tenantRepository: Repository<Tenant>,
    @InjectConnection()
    private readonly connection: Connection,
  ) {}

  async create(createTenantDto: CreateTenantDto) {
    let tenant = new Tenant();
    tenant.email = createTenantDto.email;

    tenant = await this.tenantRepository.save(tenant);
    const tenantId = tenant.tenantId;
    this.connection.query(`CREATE SCHEMA tenant_${tenantId}`);
    const tenantConnection = await getTenantConnection(tenantId + '');
    tenantConnection.runMigrations();
    return { tenantId };
  }

  findAll() {
    return this.tenantRepository.find();
  }

  findOne(id: number) {
    return this.tenantRepository.findOne(id);
  }

  update(id: number, updateTenantDto: UpdateTenantDto) {
    return this.tenantRepository.update(id, updateTenantDto);
  }

  remove(id: number) {
    return this.tenantRepository.delete(id);
  }
}
