import { Organization } from 'src/organizations/entities/organization.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userId: number;

  @Column({ type: 'varchar', length: 36 })
  firstName: string;

  @Column({ type: 'varchar', length: 36, nullable: true })
  lastName: string;

  @Column({ type: 'varchar', length: 96, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 16, nullable: true })
  phone: string;

  @Column({ type: 'bool', nullable: true })
  isActive: string;

  @ManyToOne(() => Organization, (organization) => organization.users)
  // @JoinTable({
  //   name: 'organization_users',
  //   joinColumns: [{ name: 'userId' }],
  //   inverseJoinColumns: [{ name: 'organizationId' }],
  // })
  organization: Organization;
}
