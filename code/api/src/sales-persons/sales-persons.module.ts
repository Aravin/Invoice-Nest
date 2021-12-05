import { Module } from '@nestjs/common';
import { SalesPersonsService } from './sales-persons.service';
import { SalesPersonsController } from './sales-persons.controller';
import { Organization } from 'src/organizations/entities/organization.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Organization])],
  controllers: [SalesPersonsController],
  providers: [SalesPersonsService],
})
export class SalesPersonsModule {}
