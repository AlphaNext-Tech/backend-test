import { Module } from '@nestjs/common';
import { CompetitorService } from './competitor.service';
import { CompetitorController } from './competitor.controller';
import { Competitor } from './entities/competitor.entity';
import { Metrics } from '../metric/entities/metric.entity';
import { SequelizeModule } from '@nestjs/sequelize';

@Module({
  controllers: [CompetitorController],
  providers: [CompetitorService],
  imports: [SequelizeModule.forFeature([Competitor, Metrics])],
})
export class CompetitorModule {}
