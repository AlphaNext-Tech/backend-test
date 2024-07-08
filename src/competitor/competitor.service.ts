import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import {
  CreateCompetitorDto,
  fetchCompetitorsDto,
} from './dto/create-competitor.dto';
import { Competitor } from './entities/competitor.entity';
import { Metrics } from '../metric/entities/metric.entity';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class CompetitorService {
  constructor(
    @InjectModel(Competitor) private competitorModel: typeof Competitor,
    @InjectModel(Metrics) private metricModel: typeof Metrics,
  ) {}

  async create(data: CreateCompetitorDto) {
    const competitorExist = await this.competitorModel.findOne({
      where: {
        businessName: data.businessName,
      },
    });
    if (competitorExist) {
      throw new BadRequestException('competitor already exist');
    }
    const competitor = await this.competitorModel.create(data);
    await this.metricModel.create({
      competitorId: competitor.id,
      websiteTraffic: Math.floor(Math.random() * 10000),
      topPerformingPages: data.topPerformingPages
        ? data.topPerformingPages
        : undefined,
    });

    return competitor;
  }

  async findAll(query: fetchCompetitorsDto) {
    console.log(query);
    const offset = query.page ? (query.page - 1) * query.size : 1;

    const competitors = await this.competitorModel.findAndCountAll({
      include: [{ model: Metrics }],
      offset,
      order: [['id', 'DESC']],
      limit: query.size ? +query.size : 10,
    });
    return { items: competitors };
  }

  async findOne(id: number) {
    const competitor = await this.competitorModel.findOne({
      where: {
        id,
      },
      include: [Metrics],
    });
    if (!competitor) {
      throw new NotFoundException('competitor not found');
    }
    return competitor;
  }
}
