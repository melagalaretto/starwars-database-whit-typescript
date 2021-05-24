import {
  Entity, PrimaryGeneratedColumn, ManyToOne, 
  BaseEntity
} from 'typeorm';
import { Users } from './Users';
import { Planetas } from './Planetas'

@Entity()
export class PlanetasFavoritos extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, Users => Users.PlanetasFavoritos)
  Users: Users["id"]

 @ManyToOne(() => Planetas, Planetas => Planetas.PlanetasFavoritos)
 Planetas: Planetas[];

  // @ManyToMany(() => Planet)
  // @JoinTable()
  // planets: Planet[];
  
}