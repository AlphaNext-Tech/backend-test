import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, TransformFnParams } from 'class-transformer';
import {
  IsMongoId,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsPositive,
  Max,
} from 'class-validator';
import { Types } from 'mongoose';

// Normally, these classes would be in a 'common' folder as they're used in alot of other queries, but since we have just one module, we'd leave them here

const TransformNumberStringToNumber = ({ value }: TransformFnParams) =>
  Number(value);

export class PaginationDto {
  @ApiPropertyOptional({
    type: Number,
    minimum: 1,
    maximum: 1_000_000,
    description: 'Optional: The result set page number',
    default: 1,
  })
  @IsOptional()
  @IsPositive()
  @Max(1_000_000)
  @Transform(TransformNumberStringToNumber)
  pageNo?: number;

  @ApiProperty({
    type: Number,
    minimum: 1,
    maximum: 500,
    description: 'Optional: Number of documents to return, defaults to 50',
    default: 50,
  })
  @IsNotEmpty()
  @IsPositive()
  @Max(500)
  @Transform(TransformNumberStringToNumber)
  pageSize?: number;
}

export class IdDto {
  @ApiProperty({
    type: String,
    example: '4d3ed089fb60ab534684b7e0',
    description: 'Mongoid of the resource',
  })
  @IsNotEmpty()
  @IsMongoId()
  id: string;
}
