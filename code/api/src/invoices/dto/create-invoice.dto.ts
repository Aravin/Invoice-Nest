export class CreateInvoiceDto {
  customerId: number;
  organizationId: number;
  items: number[];
  taxes?: number[];
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
}
