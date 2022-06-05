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
    return this.taxRepository.save(createTaxDto);
  }

  findAll() {
    return this.taxRepository.find();
  }

  findOne(id: number) {
    return this.taxRepository.findOne(id);
  }

  update(id: number, updateTaxDto: UpdateTaxDto) {
    return this.taxRepository.update(id, updateTaxDto);
  }

  remove(id: number) {
    return this.taxRepository.delete(id);
  }
}
