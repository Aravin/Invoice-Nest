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
    return this.salesPersonRepository.save(createSalesPersonDto);
  }

  findAll() {
    return this.salesPersonRepository.find();
  }

  findOne(id: number) {
    return this.salesPersonRepository.findOne(id);
  }

  update(id: number, updateSalesPersonDto: UpdateSalesPersonDto) {
    return this.salesPersonRepository.update(id, updateSalesPersonDto);
  }

  remove(id: number) {
    return this.salesPersonRepository.delete(id);
  }
}
