import { Invoice } from 'src/invoices/entities/invoice.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Tax {
  @PrimaryGeneratedColumn()
  taxId: number;

  @Column({ type: 'varchar', length: 48 })
  name: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  description: string;

  @Column({ type: 'numeric' })
  rate: string;

  @ManyToMany(() => Invoice, (invoice) => invoice.taxes)
  @JoinTable()
  invoices: Invoice[];
}
