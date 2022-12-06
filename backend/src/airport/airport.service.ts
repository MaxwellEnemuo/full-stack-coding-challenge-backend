import { Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AirportService {
  constructor(private prisma: PrismaService, private logger: Logger) {}

  async findAirport(search: string) {
    try {
      const result = await this.prisma.airport.findMany({
        where: {
          OR: [
            {
              name: {
                contains: search,
              },
            },
            {
              city: {
                contains: search,
              },
            },
            {
              country: {
                contains: search,
              },
            },
            {
              iata: {
                contains: search,
              },
            },
          ],
        },
      });
      return result.length > 0 ? result : [{ message: 'No airport found' }];
    } catch (error) {
      return this.logger.error(error);
    }
  }
}
