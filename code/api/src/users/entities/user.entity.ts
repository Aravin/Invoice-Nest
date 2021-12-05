import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ type: 'varchar', length: 36 })
  firstName: string;

  @Column({ type: 'varchar', length: 36 })
  lastName: string;

  @Column({ type: 'varchar', length: 96 })
  email: string;

  @Column({ type: 'varchar', length: 16 })
  phone: string;
}
