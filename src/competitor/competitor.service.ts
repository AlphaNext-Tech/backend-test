import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { FilterQuery, Model, Types } from 'mongoose';
import { Competitor, CompetitorDocument } from './schemas/competitor.schema';
import { PaginationDto } from './dtos/pagination.dto';
import { CreateCompetitorDto } from './dtos/competitor.dto';

@Injectable()
export class CompetitorService {
  constructor(
    @InjectModel(Competitor.name)
    private readonly competitorModel: Model<CompetitorDocument>,
  ) {}

  async getOneCompetitorByFilterOrThrow(
    filter: FilterQuery<CompetitorDocument>,
  ) {
    const competitor = await this.competitorModel.findOne(filter);
    if (!competitor) throw new NotFoundException('Competitor not found');
    return competitor;
  }

  async deleteCompetitor(id: Types.ObjectId | string) {
    return this.competitorModel.findByIdAndDelete(id);
  }

  async getCompetitors(dto: PaginationDto): Promise<CompetitorDocument[]> {
    const pageSize = dto?.pageSize || 50;
    const pageNo = dto?.pageNo || 1;
    const skipCount = (pageNo - 1) * pageSize;

    return this.competitorModel.find({}).limit(pageSize).skip(skipCount);
  }

  async createCompetitor(
    dto: CreateCompetitorDto,
  ): Promise<CompetitorDocument> {
    const existingCompetitor = await this.competitorModel.findOne({
      businessName: dto.businessName.trim(),
    });

    if (existingCompetitor)
      throw new ForbiddenException(
        null,
        'Competitor with specified business name already exists',
      );

    return (await this.competitorModel.create(dto)).toObject();
  }
}
