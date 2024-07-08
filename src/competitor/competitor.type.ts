import { ApiProperty } from '@nestjs/swagger';

export class CompetitorData {
  @ApiProperty()
  id: number;

  @ApiProperty()
  businessName: string;

  @ApiProperty()
  type: string;

  @ApiProperty()
  location: string;

  @ApiProperty({ type: Array<MetricsData> })
  metrics: Array<MetricsData>;

  @ApiProperty()
  expiryDate: string;

  @ApiProperty()
  updatedAt: string;

  @ApiProperty()
  createdAt: string;
}

export class CompetitorResponse {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty({ type: CompetitorData })
  data: CompetitorData;
}

class CompetitorArrayData {
  @ApiProperty({ type: [CompetitorData] })
  items: CompetitorData[];

  @ApiProperty()
  totalItems: number;
}

export class CompetitorArrayResponse {
  @ApiProperty()
  statusCode: number;

  @ApiProperty()
  message: string;

  @ApiProperty({ type: CompetitorArrayData })
  data: CompetitorArrayData;
}

export class MetricsData {
  @ApiProperty()
  id: number;

  @ApiProperty()
  competitorId: number;

  @ApiProperty()
  websiteTraffic: number;

  @ApiProperty({ type: Array<String> })
  topPerformingPages: Array<String>;

  @ApiProperty()
  updatedAt: string;

  @ApiProperty()
  createdAt: string;
}
