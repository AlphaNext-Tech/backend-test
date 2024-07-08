import { ApiProperty } from '@nestjs/swagger';
import { MetricsData } from 'src/competitor/competitor.type';

export class MetricResponse {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty({ type: MetricsData })
  data: MetricsData;
}
