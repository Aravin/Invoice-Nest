import { PartialType } from '@nestjs/mapped-types';
import { CreateInvoiceDto } from './create-invoice.dto';

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {
  customer?: number;
  organization?: number; // TODO: check
  items?: number[];
  taxes?: number[];
  invoiceNumber: string;
  orderNumber?: string;
  invoiceDate?: string;
  dueDate?: string;
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
