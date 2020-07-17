import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Power from "./Power";

@Entity()

export class SuperHero {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public name: string;

    @OneToMany(type => Power, power => power.superHero, { eager: true, cascade: true, onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    public power: Power[];

}

export default SuperHero;