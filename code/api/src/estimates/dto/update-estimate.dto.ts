import { PartialType } from '@nestjs/mapped-types';
import { CreateEstimateDto } from './create-estimate.dto';

export class UpdateEstimateDto extends PartialType(CreateEstimateDto) {
  customer?: number;
  items: number[];
  taxes?: number[];
  orderNumber?: string;
  estimateDate?: string;
  expiryDate?: string;
  salesPersonName?: string;
  subTotal?: number;
  discountType?: string;
  discountValue?: number;
  discountAmount?: number;
  taxTotal?: number;
  total?: number;
  adjustment?: number;
  notes?: string;
  tnc?: string;
  footer?: string;
}
