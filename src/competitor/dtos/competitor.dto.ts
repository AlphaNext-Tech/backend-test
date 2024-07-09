import { ApiProperty } from '@nestjs/swagger';
import { Competitor } from '../schemas/competitor.schema';
import { CompetitorPageDto } from './page.dto';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsPositive,
  IsString,
  Max,
  MaxLength,
  MinLength,
} from 'class-validator';
import { Type } from 'class-transformer';

class ICompetitor extends Competitor {}

// Extending the Competitor class keeps the DTO in sync so changes to the competitor
// schema would affect the CreateCompetitorDto too
export class CreateCompetitorDto implements ICompetitor {
  @ApiProperty({
    type: String,
    example: 'Mytech Solutions Ltd',
    description: 'The competitor title',
    minLength: 2,
    maxLength: 200,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(2)
  @MaxLength(200)
  businessName: string;

  @ApiProperty({
    type: String,
    example: 'Tech Company',
    description: 'The type of business the competitor runs',
    minLength: 5,
    maxLength: 50,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  type: string;

  @ApiProperty({
    type: Number,
    minimum: 1,
    maximum: 999_999_999_999,
    description: 'The average daily visitors for the competitor',
    example: 12000,
  })
  @IsNotEmpty()
  @IsPositive()
  @Max(999_999_999_999)
  averageDailySiteTraffic: number;

  @ApiProperty({
    type: String,
    example: 'Tech Company',
    description: 'The type of business the competitor runs',
    minLength: 5,
    maxLength: 50,
  })
  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(50)
  location: string;

  @ApiProperty({
    type: CompetitorPageDto,
    isArray: true,
    minItems: 1,
    maxItems: 10,
  })
  @IsNotEmpty()
  @Type(() => CompetitorPageDto)
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  topPages: CompetitorPageDto[];
}
