import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';

@Controller()
export class ComputerController {
  constructor(
    private cpuService: CpuService,
    private diskService: DiskService,
  ) {}

  @Get()
  run() {
    console.log(this);
    return [this.cpuService.compute(10), this.diskService.getData(1, 2)];
  }

  @Get('a')
  haha() {
    console.log('test');
    return 'a';
  }
}
