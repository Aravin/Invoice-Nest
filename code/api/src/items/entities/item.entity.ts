import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Item {
  @PrimaryGeneratedColumn()
  itemId: number;

  @Column({ type: 'varchar', length: 48 })
  name: string;

  @Column({ type: 'varchar', length: 128 })
  description: string;

  @Column({ type: 'money' })
  price: number;

  @Column({ type: 'varchar', length: 24 })
  itemType: string;
}
