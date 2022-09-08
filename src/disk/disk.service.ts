import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class DiskService {
  constructor(private powerService: PowerService) {}
  getData(a: number, b: number) {
    this.powerService.supplyPower(a + b);
    return a + b;
  }
}
