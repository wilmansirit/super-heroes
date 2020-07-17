import { getManager, getConnection, createConnection, Connection, getRepository } from "typeorm";
import { SuperHero } from "./entity/SuperHero";
import { connection } from "./connection/Connection";


class AllHeros {


    // ***************** Working with Entity Manager *****************
    // Using EntityManager via Connection
    public async getSuperHero_1() {

        const connect = await connection;
        const data = await connect.manager.findOne(SuperHero, 1);
        console.log(data);

    }

    // 
    public async getSuperHero_2() {

        await connection;

        const entityManager = getConnection()
        const data = await entityManager.getRepository(SuperHero).findOne(1);

        console.log(data);

    }

    // Get Manager
    public async getSuperHero_3() {

        const connect = await connection;
        const entityManager = getManager();
        const data = await entityManager.findOne(SuperHero, 1);
        console.log(data);

    }

    // ***************** Working with Repository *****************
    // Get Repository. Existen dos maneras
    public async getSuperHero_4() {

        const connect = await connection;
        const repository = connect.getRepository(SuperHero);
        const data = await repository.findOne(1);

        console.log(data);

    }

    public async getSuperHero_5() {

        await connection;
        const data = await getRepository(SuperHero).findOne(1);
        console.log(data);

    }

}


const allHeroes = new AllHeros();
allHeroes.getSuperHero_1();
allHeroes.getSuperHero_2();
allHeroes.getSuperHero_3();
allHeroes.getSuperHero_4();
allHeroes.getSuperHero_2();