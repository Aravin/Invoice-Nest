import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EstimatesService } from './estimates.service';
import { CreateEstimateDto } from './dto/create-estimate.dto';
import { UpdateEstimateDto } from './dto/update-estimate.dto';

@Controller('estimates')
export class EstimatesController {
  constructor(private readonly estimatesService: EstimatesService) {}

  @Post()
  create(@Body() createEstimateDto: CreateEstimateDto) {
    return this.estimatesService.create(createEstimateDto);
  }

  @Get()
  findAll() {
    return this.estimatesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.estimatesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEstimateDto: UpdateEstimateDto) {
    return this.estimatesService.update(+id, updateEstimateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.estimatesService.remove(+id);
  }
}
