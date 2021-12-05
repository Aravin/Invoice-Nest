import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEstimateDto } from './dto/create-estimate.dto';
import { UpdateEstimateDto } from './dto/update-estimate.dto';
import { Estimate } from './entities/estimate.entity';

@Injectable()
export class EstimatesService {
  constructor(
    @InjectRepository(Estimate)
    private estimateRepository: Repository<Estimate>,
  ) {}

  create(createEstimateDto: CreateEstimateDto) {
    return 'This action adds a new estimate';
  }

  findAll() {
    return `This action returns all estimates`;
  }

  findOne(id: number) {
    return `This action returns a #${id} estimate`;
  }

  update(id: number, updateEstimateDto: UpdateEstimateDto) {
    return `This action updates a #${id} estimate`;
  }

  remove(id: number) {
    return `This action removes a #${id} estimate`;
  }
}
