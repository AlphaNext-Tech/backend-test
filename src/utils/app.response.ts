import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Competitor } from 'src/competitor/schemas/competitor.schema';

export class NotFoundResponse {
  @ApiProperty({ type: String, example: 'Not found' })
  message: 'User not found';

  @ApiProperty({ type: Number, example: 404, default: 404 })
  statusCode: 404;
}

export class UnauthorizedResponse {
  @ApiProperty({ type: String, example: 'Unauthorized' })
  message: 'Unauthorized';

  @ApiProperty({ type: Number, example: 401, default: 401 })
  statusCode: 401;
}

export class BadRequestResponse {
  @ApiProperty({ type: String, example: 'Bad Request' })
  message: 'Bad Request';

  @ApiProperty({ type: Number, example: 400, default: 400 })
  statusCode: 400;
}

export class ForbiddenResponse {
  @ApiProperty({ type: String, example: 'Forbidden' })
  message: 'Forbidden';

  @ApiProperty({ type: Number, example: 403, default: 403 })
  statusCode: 403;
}

export class GeneralServiceResponse {
  @ApiProperty({ type: String, example: 'Successful' })
  message: string;

  @ApiProperty({ type: Boolean, example: 200 })
  statusCode: number;

  @ApiPropertyOptional()
  data?: unknown;
}
