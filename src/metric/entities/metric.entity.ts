import {
  Table,
  Column,
  Model,
  DataType,
  BelongsTo,
  Default,
} from 'sequelize-typescript';
import { Competitor } from 'src/competitor/entities/competitor.entity';

@Table({
  tableName: 'metrics',
  underscored: true,
  timestamps: true,
  paranoid: true,
})
export class Metrics extends Model<Metrics> {
  @Column
  competitorId: number;

  @Default(0)
  @Column(DataType.INTEGER)
  websiteTraffic: number;

  @Column(DataType.JSON)
  topPerformingPages: Array<string>;

  @BelongsTo(() => Competitor, 'competitor_id')
  competitor: Competitor;
}
