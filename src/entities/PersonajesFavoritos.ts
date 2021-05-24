import {
  Entity, PrimaryGeneratedColumn, ManyToOne, 
  BaseEntity
} from 'typeorm';
import { Users } from './Users';
import { Personajes } from './Personajes'

@Entity()
export class PersonajesFavoritos extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Users, Users => Users.PersonajesFavoritos)
  Users: Users["id"]

  @ManyToOne(() => Personajes, Personajes => Personajes.PersonajesFavoritos)
  Personajes: Personajes[];

  // @ManyToMany(() => Planet)
  // @JoinTable()
  // planets: Planet[];
}