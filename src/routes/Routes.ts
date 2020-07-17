import { Request, Response } from "express";
import { Controller } from "../controller/Controller";


class Routes {

    private controller: Controller;

    constructor() {
        this.controller = new Controller();
    }

    public routes(app): void {

        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });

        // following code is to handle http://localhost:3000/superHero request.
        app.route('/superHero')
            .get(this.controller.getAllSuperHero)
            .post(this.controller.addSuperHero);

        // following code is to handle http://localhost:3000/superHero/{superHeroId} request.
        app.route('/superHero/:superHeroId')
            .get(this.controller.getSuperHeroById)
            .put(this.controller.updateSuperHero)
            .delete(this.controller.deleteSuperHero);
    }
}

export { Routes };