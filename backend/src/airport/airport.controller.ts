import { Controller, Get, Param } from '@nestjs/common';
import { AirportService } from './airport.service';

@Controller('/api/airports')
export class AirportController {
  constructor(private airportService: AirportService) {}

  @Get(':search')
  findAirport(@Param('search') search: string) {
    return this.airportService.findAirport(search);
  }
}
