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
    return this.estimateRepository.save(createEstimateDto as any);
  }

  findAll() {
    return this.estimateRepository.find();
  }

  findOne(id: number) {
    return this.estimateRepository.findOne(id);
  }

  update(id: number, updateEstimateDto: UpdateEstimateDto) {
    return this.estimateRepository.update(id, updateEstimateDto as any);
  }

  remove(id: number) {
    return this.estimateRepository.delete(id);
  }
}
