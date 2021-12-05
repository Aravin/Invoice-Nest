import { Item } from 'src/items/entities/item.entity';
import { Organization } from 'src/organizations/entities/organization.entity';
import { Tax } from 'src/taxes/entities/tax.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Customer } from '../../customers/entities/customer.entity';

export class Invoice {
  @PrimaryGeneratedColumn()
  invoiceId: number;

  @ManyToOne(() => Customer, (customer) => customer.customerId)
  customer: Customer;

  @ManyToOne(() => Organization, (organization) => organization.organizationId)
  organization: Organization;

  @ManyToMany(() => Item)
  @JoinTable()
  items: Item[];

  @ManyToMany(() => Tax)
  @JoinTable()
  taxes: Tax[];

  @Column({ type: 'varchar', length: 36 })
  invoiceNumber: string;

  @Column({ type: 'varchar', length: 36 })
  orderNumber: string;

  @Column({ type: 'timestamptz' })
  invoiceDate: string;

  @Column({ type: 'timestamptz' })
  dueDate: string;

  @Column({ type: 'varchar', length: 75 })
  salesPersonName: string;

  @Column({ type: 'money' })
  subTotal: number;

  @Column({ type: 'varchar', length: 12 })
  discountType: string;

  @Column({ type: 'smallint', length: 12 })
  discountValue: number;

  @Column({ type: 'money' })
  discountAmount: number;

  @Column({ type: 'money' })
  taxTotal: number;

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
