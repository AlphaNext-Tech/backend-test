import { Test, TestingModule } from '@nestjs/testing';
import { CompetitorController } from './competitor.controller';
import { CompetitorService } from './competitor.service';

describe('CompetitorController', () => {
  let controller: CompetitorController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CompetitorController],
      providers: [CompetitorService],
    }).compile();

    controller = module.get<CompetitorController>(CompetitorController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
