export class CreateOrganizationDto {
  name: string;
  country?: string;
  state?: string;
  city?: string;
  addressLine1?: string;
  addressLine2?: string;
  pan?: string;
  gst?: string;
  currency?: string;
}
