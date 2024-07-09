import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { CompetitorModule } from './competitor/competitor.module';

@Module({
  imports: [
    CompetitorModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
  ],
})
export class AppModule {}
