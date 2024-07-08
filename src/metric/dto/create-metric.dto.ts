import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsArray, IsOptional } from 'class-validator';

export class CreateMetricDto {
  @ApiProperty({ required: false, type: [String] })
  @IsArray()
  @IsOptional()
  @Type(() => String)
  topPerformingPages: Array<string>;
}
