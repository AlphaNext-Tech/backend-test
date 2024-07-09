import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CompetitorService } from './competitor.service';
import {
  ApiBadRequestResponse,
  ApiForbiddenResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';
import { CreateCompetitorDto } from './dtos/competitor.dto';
import {
  BadRequestResponse,
  ForbiddenResponse,
  GeneralServiceResponse,
  NotFoundResponse,
} from 'src/utils/app.response';
import { IdDto, PaginationDto } from './dtos/pagination.dto';
import { Types } from 'mongoose';

@ApiTags('Competitors')
@Controller('competitors')
export class CompetitorController {
  constructor(private readonly competitorService: CompetitorService) {}

  @Post()
  @ApiOperation({ summary: 'Create a competitor' })
  @ApiBadRequestResponse({ type: BadRequestResponse })
  @ApiForbiddenResponse({ type: ForbiddenResponse })
  @ApiOkResponse({ type: GeneralServiceResponse })
  async createCompetitor(
    @Body() dto: CreateCompetitorDto,
  ): Promise<GeneralServiceResponse> {
    try {
      const data = await this.competitorService.createCompetitor(dto);
      return {
        message: 'Successful',
        statusCode: 200,
        data,
      };
    } catch (error) {
      return {
        message: error?.response?.message || error,
        statusCode: error?.response?.statusCode || 500,
      };
    }
  }

  @Get()
  @ApiOperation({ summary: 'Get list of competitors' })
  @ApiBadRequestResponse({ type: BadRequestResponse })
  @ApiOkResponse({ type: GeneralServiceResponse })
  async getCompetitors(@Query() dto: PaginationDto) {
    try {
      const data = await this.competitorService.getCompetitors(dto);
      return {
        message: 'Successful',
        statusCode: 200,
        data,
      };
    } catch (error) {
      return {
        message: error?.response?.message || error,
        statusCode: error?.response?.statusCode || 500,
      };
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get one competitor' })
  @ApiNotFoundResponse({ type: NotFoundResponse })
  @ApiOkResponse({ type: GeneralServiceResponse })
  @ApiParam({ name: 'id', type: String })
  async getOneCompetitor(@Param() { id }: IdDto) {
    try {
      const data = await this.competitorService.getOneCompetitorByFilterOrThrow(
        { _id: new Types.ObjectId(id) },
      );
      return {
        message: 'Successful',
        statusCode: 200,
        data,
      };
    } catch (error) {
      return {
        message: error?.response?.message || error,
        statusCode: error?.response?.statusCode || 500,
      };
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete one competitor' })
  @ApiInternalServerErrorResponse({ type: GeneralServiceResponse })
  @ApiOkResponse({ type: GeneralServiceResponse })
  @ApiParam({ name: 'id', type: String })
  async deleteCompetitor(@Param() { id }: IdDto) {
    try {
      await this.competitorService.deleteCompetitor(id);
      return {
        message: 'Successful',
        statusCode: 204,
        data: null,
      };
    } catch (error) {
      return {
        message: error?.response?.message || error,
        statusCode: error?.response?.statusCode || 500,
      };
    }
  }
}
