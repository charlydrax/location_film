import { Controller, Get } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { Customer } from './customer.entity';

@Controller('customers')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  findAll(): Promise<Customer[]> {
    return this.customerService.findAll();
  }
}
