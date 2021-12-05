import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ type: 'varchar', length: 48 })
  firstName: string;

  @Column({ type: 'varchar', length: 48 })
  lastName: string;

  @Column({ type: 'varchar', length: 96 })
  email: string;

  @Column({ type: 'varchar', length: 16 })
  phone: string;
}
