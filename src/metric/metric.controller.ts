import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MetricService } from './metric.service';
import { CreateMetricDto } from './dto/create-metric.dto';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { MetricResponse } from './metric.type';

@ApiTags('metric')
@Controller('metric')
@ApiBearerAuth()
export class MetricController {
  constructor(private readonly metricService: MetricService) {}

  @ApiOperation({
    summary: 'create competitor metric data',
  })
  @ApiOkResponse({
    description: 'The record has been successfully fetched.',
    type: MetricResponse,
  })
  @Post(':id')
  create(@Param('id') id: string, @Body() createMetricDto: CreateMetricDto) {
    return this.metricService.create(+id, createMetricDto);
  }
}
