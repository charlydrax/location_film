import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CustomerService } from './customer.service';
import { CustomerController } from './customer.controller';
import { Customer } from './customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])], // Import de l'entité
  controllers: [CustomerController],
  providers: [CustomerService], // Déclare le service ici
  exports: [CustomerService], // Exporte le service si besoin ailleurs
})
export class CustomerModule {}
