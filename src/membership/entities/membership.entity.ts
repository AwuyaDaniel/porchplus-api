// src/membership/entities/membership.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Membership {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  membershipType: string;

  @Column()
  startDate: Date;

  @Column({ nullable: true })
  dueDate: Date;

  @Column('decimal')
  totalAmount: number;

  @Column()
  email: string;

  @Column({ default: false })
  isFirstMonth: boolean;

  @Column({ nullable: true })
  invoiceLink: string;
}
