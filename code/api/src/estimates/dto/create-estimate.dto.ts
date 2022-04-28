export class CreateEstimateDto {
  customer: number;
  organization: number;
  items: number[];
  taxes?: number[];
  estimateNumber: string;
  orderNumber?: string;
  estimateDate: string;
  expiryDate?: string;
  salesPersonName?: string;
  subTotal: number;
  discountType?: string;
  discountValue?: number;
  discountAmount?: number;
  taxTotal?: number;
  total: number;
  adjustment?: number;
  notes?: string;
  tnc?: string;
  footer?: string;
}
