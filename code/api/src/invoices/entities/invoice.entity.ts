import { Item } from 'src/items/entities/item.entity';
import { Organization } from 'src/organizations/entities/organization.entity';
import { Tax } from 'src/taxes/entities/tax.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  Entity,
  JoinTable,
} from 'typeorm';
import { Customer } from '../../customers/entities/customer.entity';
import { InvoiceDetail } from '../dto/types/invoice-details';

@Entity()
export class Invoice {
  @PrimaryGeneratedColumn()
  invoiceId: number;

  @ManyToOne(() => Customer, (customer) => customer.customers)
  customer: Customer;

  @ManyToOne(() => Organization, (organization) => organization.organization)
  // @JoinColumn({ name: 'organizationId' })
  organization: Organization;

  @ManyToMany(() => Item, (item) => item.invoices, { onDelete: 'CASCADE' })
  @JoinTable()
  items: Item[];

  @ManyToMany(() => Tax, (tax) => tax.invoices, { nullable: true })
  @JoinTable()
  taxes: Tax[];

  @Column({ type: 'varchar', length: 36 })
  invoiceNumber: string;

  @Column({ type: 'varchar', length: 36, nullable: true })
  orderNumber: string;

  @Column({ type: 'date' })
  invoiceDate: string;

  @Column({ type: 'date' })
  dueDate: string;

  @Column({ type: 'varchar', length: 75, nullable: true })
  salesPersonName: string;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  subTotal: number;

  @Column({ type: 'varchar', length: 12, nullable: true })
  discountType: string;

  @Column({ type: 'numeric', precision: 12, scale: 2, nullable: true })
  discountValue: number;

  @Column({ type: 'numeric', precision: 12, scale: 2, nullable: true })
  discount: number;

  @Column({ type: 'numeric', precision: 12, scale: 2, nullable: true })
  tax: number;

  @Column({ type: 'numeric', precision: 12, scale: 2 })
  total: number;

  @Column({ type: 'numeric', precision: 12, scale: 2, nullable: true })
  adjustment: number;

  @Column({ type: 'numeric', precision: 12, scale: 2, nullable: true })
  shipping: number;

  @Column({ type: 'varchar', length: 256, nullable: true })
  notes: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  tnc: string;

  @Column({ type: 'varchar', length: 256, nullable: true })
  footer: string;

  @Column({ type: 'varchar', length: 36 })
  invoiceStatus: string;

  @Column({ type: 'json' })
  invoiceDetails: InvoiceDetail[];
}
