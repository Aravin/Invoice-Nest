import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaxesController } from './taxes/taxes.controller';
import { TaxesModule } from './taxes/taxes.module';

@Module({
  imports: [TaxesModule],
  controllers: [AppController, TaxesController],
  providers: [AppService],
})
export class AppModule {}
