import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  customerId: number;

  @Column({ type: 'varchar', length: 36 })
  firstName: string;

  @Column({ type: 'varchar', length: 36 })
  lastName: string;

  @Column({ type: 'varchar', length: 96 })
  company: string;

  @Column({ type: 'varchar', length: 96 })
  email: string;

  @Column({ type: 'varchar', length: 18 })
  phone: string;

  @Column({ type: 'varchar', length: 256 })
  website: string;

  @Column({ type: 'varchar', length: 10 })
  pan: string;

  @Column({ type: 'varchar', length: 96 })
  billingAddressLine1: string;

  @Column({ type: 'varchar', length: 96 })
  billingAddressLine2: string;

  @Column({ type: 'varchar', length: 72 })
  billingCountry: string;

  @Column({ type: 'varchar', length: 72 })
  billingState: string;

  @Column({ type: 'varchar', length: 72 })
  billingCity: string;

  @Column({ type: 'varchar', length: 96 })
  shippingAttn: string;

  @Column({ type: 'varchar', length: 96 })
  shippingAddressLine1: string;

  @Column({ type: 'varchar', length: 96 })
  shippingAddressLine2: string;

  @Column({ type: 'varchar', length: 72 })
  shippingCountry: string;

  @Column({ type: 'varchar', length: 72 })
  shippingState: string;

  @Column({ type: 'varchar', length: 72 })
  shippingCity: string;

  @Column({ type: 'text' })
  remarks: string;
}
