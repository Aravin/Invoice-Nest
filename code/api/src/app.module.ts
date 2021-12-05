import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxesModule } from './taxes/taxes.module';
import { SalesPersonsModule } from './sales-persons/sales-persons.module';
import { ItemsModule } from './items/items.module';
import { CustomersModule } from './customers/customers.module';
import { InvoicesModule } from './invoices/invoices.module';
import { EstimatesModule } from './estimates/estimates.module';
import { UsersModule } from './users/users.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USR,
      password: process.env.DB_PWD,
      database: process.env.DB_NAME,
      entities: ['dist/**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
      // ssl: false,
    }),
    TaxesModule,
    SalesPersonsModule,
    ItemsModule,
    CustomersModule,
    InvoicesModule,
    EstimatesModule,
    UsersModule,
    OrganizationsModule,
  ],
  exports: [TypeOrmModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
