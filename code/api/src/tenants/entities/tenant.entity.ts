import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Tenant {
  @PrimaryGeneratedColumn()
  tenantId: number;

  @Column({ type: 'varchar', length: 48 })
  email: string;
}
