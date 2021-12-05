import { Injectable } from '@nestjs/common';
import { CreateEstimateDto } from './dto/create-estimate.dto';
import { UpdateEstimateDto } from './dto/update-estimate.dto';

@Injectable()
export class EstimatesService {
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
