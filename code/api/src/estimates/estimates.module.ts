import { Module } from '@nestjs/common';
import { EstimatesService } from './estimates.service';
import { EstimatesController } from './estimates.controller';

@Module({
  controllers: [EstimatesController],
  providers: [EstimatesService]
})
export class EstimatesModule {}
