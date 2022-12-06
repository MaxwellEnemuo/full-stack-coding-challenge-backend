import { Module, Logger } from '@nestjs/common';

import { PrismaService } from 'src/prisma/prisma.service';
import { AirportController } from './airport.controller';
import { AirportService } from './airport.service';

@Module({
  controllers: [AirportController],
  providers: [AirportService, PrismaService, Logger],
})
export class AirportModule {}
