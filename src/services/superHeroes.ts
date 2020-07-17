import SuperHero from "../entity/SuperHero";
import Power from "../entity/Power";
import { connection } from "../connection/Connection";
import { EntityManager, getConnection } from "typeorm";



class SuperHeroService {

    private entityManager: EntityManager;


    public async list(): Promise<any[]> {

        try {

            this.entityManager = (await connection).manager
            return await this.entityManager.find(SuperHero);

        } catch (error) {

            return error;

        }
    }

    public async getById(id: number): Promise<any> {

        try {

            this.entityManager = (await connection).manager
            return await this.entityManager.findOne(SuperHero, id)

        } catch (error) {

            return { message: error.message };

        }

    }

    public async remove(id: number): Promise<any> {

        try {

            this.entityManager = (await connection).manager;
            const deleteResult = await this.entityManager.delete(SuperHero, id);

            if (!deleteResult.affected) throw Error("Not Found..!");

            return { message: "Successfully Removed." };

        } catch (error) {

            return { message: error.message };

        }
    }

    public async create(entity: SuperHero): Promise<any> {


        try {

            this.entityManager = (await connection).manager;
            await this.entityManager.save(SuperHero, entity);

            return { message: "Successfully Saved." };

        } catch (error) {

            return { message: error.message };

        }

    }

    public async modify(entity: any): Promise<any> {

        try {

            this.entityManager = (await connection).manager;

            let superHero: SuperHero = await this.entityManager.findOne(SuperHero, entity.id)

            // Delete previus powers to create them later
            await this.entityManager.delete(Power, { superHero: entity.id });

            superHero.name = entity.name;
            superHero.power = [];

            let powers: any[] = entity.power;

            powers.forEach(power => {

                let newPower = new Power();
                newPower.ability = power.ability;

                superHero.power.push(newPower);

            })

            // Save the superHero
            await this.entityManager.save(superHero);

            return { message: "Successfully Updated." };

        } catch (error) {

            return { message: error };

        }
    }
}

export const superHeroService = new SuperHeroService();