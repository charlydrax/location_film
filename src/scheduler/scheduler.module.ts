import { Module } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rental } from '../rental/rental.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rental])],
  providers: [SchedulerService],
})
export class SchedulerModule {}
