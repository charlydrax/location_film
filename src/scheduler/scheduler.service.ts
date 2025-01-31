import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Rental } from '../rental/rental.entity';

@Injectable()
export class SchedulerService {
  private readonly logger = new Logger(SchedulerService.name);

  constructor(
    @InjectRepository(Rental)
    private readonly rentalRepository: Repository<Rental>,
  ) {}

  @Cron('0 12 * * *') // Tous les jours à 12h00
  async handleCron() {
    this.logger.log('Vérification des locations à notifier...');
    const today = new Date();
    
    const rentals = await this.rentalRepository.find({ relations: ['customer'] });

    for (const rental of rentals) {
      const returnDate = new Date(rental.returnDate);
      const diffDays = Math.floor((returnDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));

      if (diffDays === 5 || diffDays === 3) {
        this.sendReminder(rental.customer.email, rental.movieTitle, returnDate);
      }
    }
  }

  private sendReminder(email: string, movieTitle: string, returnDate: Date) {
    this.logger.log(`📩 Envoi d'un email à ${email} pour le film ${movieTitle}, retour prévu le ${returnDate}`);
    // Ici, on peut utiliser un service de mail (ex: Nodemailer)
  }
}
