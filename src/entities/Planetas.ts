import {
    Entity, Column, PrimaryGeneratedColumn,
    BaseEntity
} from 'typeorm';

@Entity()
export class Planetas extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    img: string;
    PlanetasFavoritos: any;

    // @ManyToMany(() => Planet)
    // @JoinTable()
    // planets: Planet[];

}