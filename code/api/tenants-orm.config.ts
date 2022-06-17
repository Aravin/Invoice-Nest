import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ormConfig } from 'orm.config';

export const tenantsOrmConfig: TypeOrmModuleOptions = {
  ...ormConfig,
  // entities: ['dist/**/!(tenant|user).entity{.ts,.js}'],
  // migrations: ['dist/**/!(tenant|user).migration{.ts,.js}'],
};
