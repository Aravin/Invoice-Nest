// import { User } from 'src/users/entities/user.entity';
import { Invoice } from 'src/invoices/entities/invoice.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Organization {
  @PrimaryGeneratedColumn()
  organizationId: number;

  @Column({ type: 'varchar', length: 96 })
  name: string;

  @Column({ type: 'varchar', length: 96 })
  country: string;

  @Column({ type: 'varchar', length: 96, nullable: true })
  state: string;

  @Column({ type: 'varchar', length: 96, nullable: true })
  city: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  addressLine1: string;

  @Column({ type: 'varchar', length: 128, nullable: true })
  addressLine2: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  pan: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  gst: string;

  @Column({ type: 'varchar', length: 5 })
  currency: string;

  @OneToMany(() => Invoice, (invoice) => invoice.organization)
  // @JoinTable({
  //   name: 'organization_users',
  //   joinColumns: [{ name: 'organizationId' }],
  //   inverseJoinColumns: [{ name: 'userId' }],
  // })
  organization: Organization;

  @OneToMany(() => User, (user) => user.organization)
  users: User[];
}
