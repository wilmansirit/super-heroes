import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, JoinColumn } from "typeorm";
import SuperHero from "./SuperHero";


@Entity()
export class Power {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column()
    public ability: string;

    @ManyToOne(type => SuperHero, superHero => superHero.power, { onUpdate: 'CASCADE', onDelete: 'CASCADE' })
    // @JoinColumn({ name: 'superHeroId' })
    public superHero: SuperHero;

}
export default Power;