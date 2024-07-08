import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import * as bodyParser from 'body-parser';

import { ApiConfigService } from './config/api-config.service';
import { HttpExceptionFilter } from './filters/http-exception.filter';

async function bootstrap() {
  const logger = new Logger();

  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );

  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
  app.useGlobalFilters(new HttpExceptionFilter());

  const config = app.get(ApiConfigService);
  const docBuilder = new DocumentBuilder()
    .setTitle('Alpha-next-backend-test API Documentation')
    .setDescription('The Alpha-next-backend-test API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, docBuilder);
  SwaggerModule.setup('/docs', app, document);

  await app.listen(config.port);
  logger.log(`Application listening on port ${config.port}`);
}
bootstrap();
