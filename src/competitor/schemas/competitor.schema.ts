import { Prop, raw, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { CompetitorPageDto } from '../dtos/page.dto';

@Schema({
  timestamps: true,
})
export class Competitor {
  @Prop({
    required: true,
    trim: true,
  })
  businessName: string;

  @Prop({
    required: true,
    type: String,
    trim: true,
  })
  type: string;

  @Prop({ required: true, type: String, trim: true })
  location: string;

  /*
   *
   * Yeah, I know, the metrics is supposed to be on a separate collection, but in this use case, there's really no reason for that. Its just an added layer of avoidable complexity (albeit an insigificant one) and besides, we're using MongoDB, where the mantra is: "Data that is accessed together should be stored together". Separateing closely related data is an anti-pattern in MongoDB. It'll be awful to take a relational approach on a NoSQL db.
   * https://www.mongodb.com/developer/products/mongodb/schema-design-anti-pattern-separating-data/
   *
   */
  @Prop({
    type: raw([{ url: String, averageDailyVisits: Number }]),
    required: true,
  })
  topPages: CompetitorPageDto[];

  @Prop({ type: Number, required: true })
  averageDailySiteTraffic: number;
}

export const CompetitorSchema = SchemaFactory.createForClass(Competitor);
export type CompetitorDocument = Competitor & Document;
