import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerDto } from './create-customer.dto';

export class UpdateCustomerDto extends PartialType(CreateCustomerDto) {
  firstName?: string;
  lastName?: string;
  company?: string;
  email?: string;
  phone?: string;
  website?: string;
  pan?: string;
  gst?: string;
  taxId?: string;
  addressLine1?: string;
  addressLine2?: string;
  country?: string;
  state?: string;
  city?: string;
  zip?: string;
  remarks?: string;
}
