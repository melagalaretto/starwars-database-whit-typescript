import {
    Entity, Column, PrimaryGeneratedColumn, ManyToOne,
    BaseEntity
} from 'typeorm';

@Entity()
export class Personajes extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    img: string;
    PersonajesFavoritos: any;

    // @ManyToMany(() => Planet)
    // @JoinTable()
    // planets: Planet[];

}