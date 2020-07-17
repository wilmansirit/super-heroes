import { createConnection } from "typeorm";
import SuperHero from "../entity/SuperHero";
import Power from "../entity/Power";


export const connection = createConnection({

    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432, // default port of postgres
    username: "root", // our created username, you can have your own user name
    password: "451ws380lc++A", // our created username, you can have your own password
    database: "heroes", // our created database name, you can have your own
    entities: [
        // typeORM will not be able to create database table if we forget to put entity class name here..
        SuperHero, // our SuperHero entity class
        Power      // our Power entity class
    ],
    synchronize: true,
    logging: false

});