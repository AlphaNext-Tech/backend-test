import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { CompetitorService } from './competitor.service';
import {
  CreateCompetitorDto,
  fetchCompetitorsDto,
} from './dto/create-competitor.dto';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CompetitorArrayResponse, CompetitorResponse } from './competitor.type';

@ApiTags('competitors')
@Controller('competitor')
export class CompetitorController {
  constructor(private readonly competitorService: CompetitorService) {}

  @ApiOperation({
    summary: 'create competitor data',
  })
  @ApiOkResponse({
    description: 'The record has been successfully fetched.',
    type: CompetitorResponse,
  })
  @Post()
  create(@Body() createCompetitorDto: CreateCompetitorDto) {
    return this.competitorService.create(createCompetitorDto);
  }

  @ApiOperation({
    summary: 'fetch all competitors',
  })
  @ApiOkResponse({
    description: 'The record has been successfully fetched.',
    type: CompetitorArrayResponse,
  })
  @Get()
  findAll(@Query() query: fetchCompetitorsDto) {
    return this.competitorService.findAll(query);
  }

  @ApiOperation({
    summary: 'fetch a competitor by id',
  })
  @ApiOkResponse({
    description: 'The record has been successfully fetched.',
    type: CompetitorResponse,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.competitorService.findOne(+id);
  }
}
