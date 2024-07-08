import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMetricDto } from './dto/create-metric.dto';
import { Competitor } from '../competitor/entities/competitor.entity';
import { Metrics } from './entities/metric.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class MetricService {
  constructor(
    @InjectModel(Competitor) private competitorModel: typeof Competitor,
    @InjectModel(Metrics) private metricModel: typeof Metrics,
  ) {}

  async create(id: number, createMetricDto: CreateMetricDto) {
    const competitor = await this.competitorModel.findOne({
      where: {
        id,
      },
    });
    if (!competitor) {
      throw new NotFoundException('competitor not found');
    }
    return await this.metricModel.create({
      competitorId: id,
      websiteTraffic: Math.floor(Math.random() * 10000),
      topPerformingPages: createMetricDto.topPerformingPages
        ? createMetricDto.topPerformingPages
        : undefined,
    });
  }
}
