import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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
