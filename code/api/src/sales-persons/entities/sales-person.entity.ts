import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class SalesPerson {
  @PrimaryGeneratedColumn()
  salesPersonId: number;

  @Column({ type: 'varchar', length: 72 })
  name: string;

  @Column({ type: 'varchar', length: 24, nullable: true })
  role: string;

  @Column({ type: 'varchar', length: 16, nullable: true })
  phone: string;

  @Column({ type: 'varchar', length: 96, nullable: true })
  email: string;
}
