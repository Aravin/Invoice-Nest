import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesPersonDto } from './create-sales-person.dto';

export class UpdateSalesPersonDto extends PartialType(CreateSalesPersonDto) {}
