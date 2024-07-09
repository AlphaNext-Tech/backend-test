import { INestApplication } from '@nestjs/common';
import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerModule,
} from '@nestjs/swagger';

// export const SetupSwagger = (app: INestApplication) => {
//   const swaggerConfig = new DocumentBuilder()
//     .setTitle('AlphaNext Assessment Docs')
//     .setVersion('1.0')
//     .build();

//   const document = SwaggerModule.createDocument(app, swaggerConfig);
//   SwaggerModule.setup('/api/v1/docs', app, document, {
//     swaggerOptions: {
//       tagsSorter: 'alpha',
//       operationsSorter: 'alpha',
//       docExpansion: 'none',
//       filter: true,
//     },
//     customSiteTitle: 'Lex - AlphaNext Assessment',
//   });
// };

export const SetupSwagger = (app: INestApplication) => {
  const swaggerApiOptions: SwaggerCustomOptions = {
    swaggerOptions: {
      tagsSorter: 'alpha',
      operationsSorter: 'alpha',
      docExpansion: 'none',
    },
    customSiteTitle: 'Lex - AlphaNext Assessment Docs',
  };

  const config = new DocumentBuilder()
    .setTitle('AlphaNext Assessment Docs')
    .setVersion('1.0')
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api/v1/docs', app, swaggerDoc, swaggerApiOptions);
};
