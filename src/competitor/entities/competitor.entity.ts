import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Metrics } from '../../metric/entities/metric.entity';

@Table({
  tableName: 'competitors',
  underscored: true,
  timestamps: true,
  paranoid: true,
})
export class Competitor extends Model<Competitor> {
  @Column
  businessName: string;

  @Column
  type: string;

  @Column
  location: string;

  @HasMany(() => Metrics, 'competitor_id')
  metrics: Metrics[];
}
