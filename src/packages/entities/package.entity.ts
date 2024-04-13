import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Packages')
export class Packages {
  @PrimaryGeneratedColumn()
  id: number;

  // @Column('simple-array', { nullable: true })
  // selectedItems: number[];

  @Column('simple-array', { nullable: true })
  Ids: number[];

  @Column('decimal', { nullable: true })
  totalWeight: number;

  @Column('decimal', {  nullable: true })
  totalPrice: number;

  @Column('decimal', {  nullable: true })
  courierPrice: number;
}