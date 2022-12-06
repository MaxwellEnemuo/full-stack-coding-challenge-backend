import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { AirportController } from './airport/airport.controller';
import { AirportService } from './airport/airport.service';
import { AirportModule } from './airport/airport.module';

@Module({
  imports: [PrismaModule, AirportModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
