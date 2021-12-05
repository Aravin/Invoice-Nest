import { Test, TestingModule } from '@nestjs/testing';
import { SalesPersonsController } from './sales-persons.controller';
import { SalesPersonsService } from './sales-persons.service';

describe('SalesPersonsController', () => {
  let controller: SalesPersonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SalesPersonsController],
      providers: [SalesPersonsService],
    }).compile();

    controller = module.get<SalesPersonsController>(SalesPersonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
