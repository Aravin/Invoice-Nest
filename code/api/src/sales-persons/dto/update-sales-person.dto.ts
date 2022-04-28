import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesPersonDto } from './create-sales-person.dto';

export class UpdateSalesPersonDto extends PartialType(CreateSalesPersonDto) {
  name?: string;
  role?: string;
  phone?: string;
  email?: string;
}
