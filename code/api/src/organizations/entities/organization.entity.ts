import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Organization {
  @PrimaryGeneratedColumn()
  organizationId: number;

  @Column({ type: 'varchar', length: 48 })
  name: string;

  @Column({ type: 'varchar', length: 96 })
  country: string;

  @Column({ type: 'varchar', length: 96 })
  state: string;

  @Column({ type: 'varchar', length: 96 })
  city: string;

  @Column({ type: 'varchar', length: 128 })
  addressLine1: string;

  @Column({ type: 'varchar', length: 128 })
  addressLine2: string;

  @Column({ type: 'varchar', length: 10 })
  pan: string;

  @Column({ type: 'varchar', length: 15 })
  gst: string;
}
