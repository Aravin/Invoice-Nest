import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { DataSourceOptions } from 'typeorm';

dotenv.config();

export const connectionConfig: DataSourceOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USR,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  logging: true,
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/**/*.migration{.ts,.js}'],
  name: 'default',
};

export const ormConfig: TypeOrmModuleOptions = {
  autoLoadEntities: true,
  ...connectionConfig,
};
