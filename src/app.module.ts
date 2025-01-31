import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ScheduleModule } from '@nestjs/schedule';
import { RentalModule } from './rental/rental.module';
import { CustomerModule } from './customer/customer.module';
import { SchedulerModule } from './scheduler/scheduler.module';
import { Rental } from './rental/rental.entity';
import { Customer } from './customer/customer.entity'; 

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '',
      port: ,
      username: '',
      password: '',
      database: '',
      entities: [Rental, Customer],
      synchronize: false,
      logging: true, // Ajoute cette ligne pour voir les requêtes SQL
      autoLoadEntities: true,
    }),
    ScheduleModule.forRoot(),
    RentalModule,
    CustomerModule,
    SchedulerModule, 
  ],
})
export class AppModule {}
