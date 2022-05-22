import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ormConfig } from 'orm.config';

export const tenantsOrmConfig: TypeOrmModuleOptions = {
  ...ormConfig,
};
