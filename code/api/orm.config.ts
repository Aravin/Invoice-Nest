import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';

dotenv.config();

export const ormConfig: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USR,
  password: process.env.DB_PWD,
  database: process.env.DB_NAME,
  logging: true,
  autoLoadEntities: true,
  synchronize: true,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/**/*.migration{.ts,.js}'],
};

export const dataSource = new DataSource(ormConfig as any);
