import {
  Entity, Column, PrimaryGeneratedColumn,
  BaseEntity
} from 'typeorm';

@Entity()
export class Users extends BaseEntity{
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
  
  @Column()
  password: string;

    PersonajesFavoritos: any;
    PlanetasFavoritos: any;

  // @ManyToMany(() => Planet)
  // @JoinTable()
  // planets: Planet[];
  
}