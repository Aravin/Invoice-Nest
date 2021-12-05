import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SalesPerson {
  @PrimaryGeneratedColumn()
  salesPersonId: number;

  @Column({ type: 'varchar', length: 72 })
  name: string;

  @Column({ type: 'varchar', length: 24 })
  role: string;

  @Column({ type: 'varchar', length: 16 })
  phone: string;

  @Column({ type: 'varchar', length: 96 })
  email: string;
}
