import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Customer {
  @PrimaryGeneratedColumn()
  customerId: number;

  @Column({ type: 'varchar', length: 36 })
  firstName: string;

  @Column({ type: 'varchar', length: 36 })
  lastName: string;

  @Column({ type: 'varchar', length: 96, nullable: true })
  company: string;

  @Column({ type: 'varchar', length: 96, nullable: true })
  email: string;

  @Column({ type: 'varchar', length: 18, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  website: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  gst: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  pan: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  ssn: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  taxId: string;

  @Column({ type: 'varchar', length: 96, nullable: true })
  addressLine1: string;

  @Column({ type: 'varchar', length: 96, nullable: true })
  addressLine2: string;

  @Column({ type: 'varchar', length: 72, nullable: true })
  country: string;

  @Column({ type: 'varchar', length: 72, nullable: true })
  state: string;

  @Column({ type: 'varchar', length: 72, nullable: true })
  city: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  zip: string;

  @Column({ type: 'text', nullable: true })
  remarks: string;
}
