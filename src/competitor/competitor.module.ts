import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Competitor, CompetitorSchema } from './schemas/competitor.schema';
import { CompetitorController } from './competitor.controller';
import { CompetitorService } from './competitor.service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: Competitor.name,
        schema: CompetitorSchema,
      },
    ]),
  ],
  controllers: [CompetitorController],
  providers: [CompetitorService],
  exports: [CompetitorService],
})
export class CompetitorModule {}
