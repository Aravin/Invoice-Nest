import { Module } from '@nestjs/common';
import { SalesPersonsService } from './sales-persons.service';
import { SalesPersonsController } from './sales-persons.controller';

@Module({
  controllers: [SalesPersonsController],
  providers: [SalesPersonsService]
})
export class SalesPersonsModule {}
