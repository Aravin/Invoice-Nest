import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSalesPersonDto } from './dto/create-sales-person.dto';
import { UpdateSalesPersonDto } from './dto/update-sales-person.dto';
import { SalesPerson } from './entities/sales-person.entity';

@Injectable()
export class SalesPersonsService {
  constructor(
    @InjectRepository(SalesPerson)
    private salesPersonRepository: Repository<SalesPerson>,
  ) {}

  create(createSalesPersonDto: CreateSalesPersonDto) {
    return 'This action adds a new salesPerson';
  }

  findAll() {
    return `This action returns all salesPersons`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salesPerson`;
  }

  update(id: number, updateSalesPersonDto: UpdateSalesPersonDto) {
    return `This action updates a #${id} salesPerson`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesPerson`;
  }
}
