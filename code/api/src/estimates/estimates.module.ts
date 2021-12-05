import { Module } from '@nestjs/common';
import { EstimatesService } from './estimates.service';
import { EstimatesController } from './estimates.controller';
import { Estimate } from './entities/estimate.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Estimate])],
  controllers: [EstimatesController],
  providers: [EstimatesService],
})
export class EstimatesModule {}
