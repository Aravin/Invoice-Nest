import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxesController } from './taxes/taxes.controller';
import { TaxesModule } from './taxes/taxes.module';
import { SalesPersonsModule } from './sales-persons/sales-persons.module';
import { ItemsModule } from './items/items.module';
import { CustomersModule } from './customers/customers.module';
import { InvoicesModule } from './invoices/invoices.module';
import { EstimatesModule } from './estimates/estimates.module';
import { UsersModule } from './users/users.module';
import { OrganizationsModule } from './organizations/organizations.module';

@Module({
  imports: [TaxesModule, SalesPersonsModule, ItemsModule, CustomersModule, InvoicesModule, EstimatesModule, UsersModule, OrganizationsModule],
  controllers: [AppController, TaxesController],
  providers: [AppService],
})
export class AppModule {}
