import { Test, TestingModule } from '@nestjs/testing';
import { SalesPersonsService } from './sales-persons.service';

describe('SalesPersonsService', () => {
  let service: SalesPersonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SalesPersonsService],
    }).compile();

    service = module.get<SalesPersonsService>(SalesPersonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
