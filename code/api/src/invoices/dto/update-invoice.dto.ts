import { PartialType } from '@nestjs/mapped-types';
import { CreateInvoiceDto } from './create-invoice.dto';
import { InvoiceDetail } from './types/invoice-details';
import { ItemId, TaxId } from './types/types';

export class UpdateInvoiceDto extends PartialType(CreateInvoiceDto) {
  customer?: number;
  organizationId?: number; // TODO: check
  items?: ItemId[];
  taxes?: TaxId[];
  invoiceNumber: string;
  orderNumber?: string;
  invoiceDate?: string;
  dueDate?: string;
  salesPersonName?: string;
  subTotal?: number;
  discountType?: string;
  discountValue?: number;
  discount?: number;
  tax?: number;
  total?: number;
  adjustment?: number;
  shipping?: number;
  notes?: string;
  tnc?: string;
  footer?: string;
  invoiceStatus?: string;
  invoiceDetails: InvoiceDetail[];
}
