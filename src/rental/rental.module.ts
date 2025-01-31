import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rental } from './rental.entity';
import { RentalService } from './rental.service';
import { RentalController } from './rental.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Rental])],
  controllers: [RentalController],
  providers: [RentalService],
  exports: [RentalService],
})
export class RentalModule {}
