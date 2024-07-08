import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateCompetitorDto {
  @IsString()
  @ApiProperty({ required: true, example: 'odumodublvck enterprise' })
  businessName?: string;

  @IsString()
  @ApiProperty({ required: true, example: 'fintech' })
  type?: string;

  @IsString()
  @ApiProperty({ required: true, example: '2 giwa street' })
  location?: string;

  @ApiProperty({ required: false, type: [String] })
  @IsArray()
  @IsOptional()
  @Type(() => String)
  topPerformingPages: Array<string>;
}

export class fetchCompetitorsDto {
  @IsOptional()
  @ApiProperty({ required: false, example: 1 })
  page?: number;

  @IsOptional()
  @ApiProperty({ required: false, example: 10 })
  size?: number;
}
