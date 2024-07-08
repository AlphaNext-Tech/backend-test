import { Module } from '@nestjs/common';
import { MetricService } from './metric.service';
import { MetricController } from './metric.controller';
import { Competitor } from '../competitor/entities/competitor.entity';
import { SequelizeModule } from '@nestjs/sequelize';
import { Metrics } from './entities/metric.entity';
import { ApiConfigModule } from 'src/config/api-config.module';

@Module({
  controllers: [MetricController],
  providers: [MetricService],
  imports: [SequelizeModule.forFeature([Competitor, Metrics]), ApiConfigModule],
})
export class MetricModule {}
