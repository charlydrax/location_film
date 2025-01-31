import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Customer } from '../customer/customer.entity';

@Entity()
export class Rental {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Customer, customer => customer.id)
  customer: Customer;

  @Column()
  movieTitle: string;

  @Column()
  startDate: Date;

  @Column()
  returnDate: Date; // Date de retour prévue
}
