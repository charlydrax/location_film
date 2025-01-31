import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rental } from './rental.entity';

@Injectable()
export class RentalService {
  constructor(
    @InjectRepository(Rental)
    private rentalRepository: Repository<Rental>,
  ) {}

  async createRental(rentalData: Partial<Rental>): Promise<Rental> {
    const rental = this.rentalRepository.create(rentalData);
    return this.rentalRepository.save(rental);
  }

  async getAllRentals(): Promise<Rental[]> {
    return this.rentalRepository.find();
  }
}
