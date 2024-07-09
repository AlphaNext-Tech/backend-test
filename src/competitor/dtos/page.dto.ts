import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsPositive, IsUrl, Max } from 'class-validator';

export class CompetitorPageDto {
  @ApiProperty({
    type: String,
    example: 'https://lex@lex.com',
    description: 'The page URL',
  })
  @IsNotEmpty()
  @IsUrl()
  url: string;

  @ApiProperty({
    type: Number,
    minimum: 1,
    maximum: 999_999_999_999,
    description: 'The average daily visitors for the page',
    example: 199702,
  })
  @IsNotEmpty()
  @IsPositive()
  @Max(999_999_999_999)
  averageDailyVisits: number;
}
