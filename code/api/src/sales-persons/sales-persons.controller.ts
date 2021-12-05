import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SalesPersonsService } from './sales-persons.service';
import { CreateSalesPersonDto } from './dto/create-sales-person.dto';
import { UpdateSalesPersonDto } from './dto/update-sales-person.dto';

@Controller('sales-persons')
export class SalesPersonsController {
  constructor(private readonly salesPersonsService: SalesPersonsService) {}

  @Post()
  create(@Body() createSalesPersonDto: CreateSalesPersonDto) {
    return this.salesPersonsService.create(createSalesPersonDto);
  }

  @Get()
  findAll() {
    return this.salesPersonsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesPersonsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateSalesPersonDto: UpdateSalesPersonDto,
  ) {
    return this.salesPersonsService.update(+id, updateSalesPersonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesPersonsService.remove(+id);
  }
}
