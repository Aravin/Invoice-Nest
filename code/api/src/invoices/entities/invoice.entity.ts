import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { Customer } from '../../customers/entities/customer.entity';

export class Invoice {
  @PrimaryGeneratedColumn()
  invoiceId: number;

  // @OneToOne({ type => Customer})
  // customer: number;

  // @ManyToMany({ type => Customer})
  // item: number;

  // @ManyToMany({ type => Customer})
  // discount: number;

  // @ManyToMany({ type => Customer})
  // tax: number;

  @Column({ type: 'varchar', length: 36 })
  invoiceNumber: string;

  @Column({ type: 'varchar', length: 36 })
  orderNumber: string;

  @Column({ type: 'timestamptz' })
  invoiceDate: string;

  @Column({ type: 'timestamptz' })
  dueDate: string;

  @Column({ type: 'money' })
  subTotal: number;

  @Column({ type: 'money' })
  discount: number;

  @Column({ type: 'money' })
  tax: number;

  @Column({ type: 'money' })
  total: number;

  @Column({ type: 'money' })
  adjustment: number;

  @Column({ type: 'varchar', length: 256 })
  notes: string;

  @Column({ type: 'varchar', length: 256 })
  tnc: string;

  @Column({ type: 'varchar', length: 256 })
  footer: string;
}
