import { Module } from '@nestjs/common';
import { SalesPersonsService } from './sales-persons.service';
import { SalesPersonsController } from './sales-persons.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesPerson } from './entities/sales-person.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesPerson])],
  controllers: [SalesPersonsController],
  providers: [SalesPersonsService],
})
export class SalesPersonsModule {}
