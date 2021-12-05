import { Item } from 'src/items/entities/item.entity';
import { Customer } from 'src/customers/entities/customer.entity';
import { Tax } from 'src/taxes/entities/tax.entity';
import {
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Organization } from 'src/organizations/entities/organization.entity';

export class Estimate {
  @PrimaryGeneratedColumn()
  estimateId: number;

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
  estimateNumber: string;

  @Column({ type: 'varchar', length: 36 })
  orderNumber: string;

  @Column({ type: 'timestamptz' })
  estimateDate: string;

  @Column({ type: 'timestamptz' })
  expiryDate: string;

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
