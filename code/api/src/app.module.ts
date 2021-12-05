import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxesController } from './taxes/taxes.controller';
import { TaxesModule } from './taxes/taxes.module';
import { SalesPersonsModule } from './sales-persons/sales-persons.module';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [TaxesModule, SalesPersonsModule, ItemsModule],
  controllers: [AppController, TaxesController],
  providers: [AppService],
})
export class AppModule {}
