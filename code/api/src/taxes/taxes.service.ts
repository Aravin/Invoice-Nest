import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTaxDto } from './dto/create-tax.dto';
import { UpdateTaxDto } from './dto/update-tax.dto';
import { Tax } from './entities/tax.entity';

@Injectable()
export class TaxesService {
  constructor(
    @InjectRepository(Tax)
    private taxRepository: Repository<Tax>,
  ) {}

  create(createTaxDto: CreateTaxDto) {
    return 'This action adds a new tax';
  }

  findAll() {
    return `This action returns all taxes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tax`;
  }

  update(id: number, updateTaxDto: UpdateTaxDto) {
    return `This action updates a #${id} tax`;
  }

  remove(id: number) {
    return `This action removes a #${id} tax`;
  }
}
