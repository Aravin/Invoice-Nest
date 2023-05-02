import { InvoiceDetail } from './types/invoice-details';
import { ItemId, TaxId } from './types/types';

export class CreateInvoiceDto {
  customerId: number;
  organizationId: number;
  items?: ItemId[];
  taxes?: TaxId[];
  invoiceNumber: string;
  orderNumber?: string;
  invoiceDate: string;
  dueDate?: string;
  salesPersonName?: string;
  subTotal: number;
  discountType?: string;
  discountValue?: number;
  discount?: number;
  tax?: number;
  total: number;
  adjustment?: number;
  shipping?: number;
  notes?: string;
  tnc?: string;
  footer?: string;
  status: string;
  invoiceDetails: InvoiceDetail[];
}
