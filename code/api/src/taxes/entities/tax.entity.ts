import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Tax {
  @PrimaryGeneratedColumn()
  taxId: number;

  @Column({ type: 'varchar', length: 48 })
  name: string;

  @Column({ type: 'varchar', length: 128 })
  description: string;

  @Column({ type: 'smallint' })
  rate: string;
}
