import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
  constructor(private powerService: PowerService) {}
  compute(a: number) {
    this.powerService.supplyPower(a);
    return a;
  }
}
