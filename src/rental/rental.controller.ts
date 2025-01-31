import { Controller, Post, Get, Body } from '@nestjs/common';
import { RentalService } from './rental.service';
import { Rental } from './rental.entity';

@Controller('rentals')
export class RentalController {
  constructor(private readonly rentalService: RentalService) {}

  @Post()
  async createRental(@Body() rentalData: Partial<Rental>): Promise<Rental> {
    return this.rentalService.createRental(rentalData);
  }

  @Get()
  async getAllRentals(): Promise<Rental[]> {
    return this.rentalService.getAllRentals();
  }
}
