import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class SalesPerson {
  @PrimaryGeneratedColumn()
  salesPersonId: number;

  @Column({ type: 'varchar', length: 96 })
  name: string;

  @Column({ type: 'varchar', length: 24 })
  role: string;

  @Column({ type: 'varchar', length: 16 })
  phone: string;

  @Column({ type: 'varchar', length: 96 })
  email: string;
}
