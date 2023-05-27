import { Invoice } from 'src/invoices/entities/invoice.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  itemId: number;

  @Column({ type: 'varchar', length: 48 })
  name: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  description: string;

  @Column({ type: 'numeric' })
  price: number;

  @Column({ type: 'smallint' })
  itemType: number;

  @ManyToMany(() => Invoice, (invoice) => invoice.items)
  invoices: Invoice[];
}
