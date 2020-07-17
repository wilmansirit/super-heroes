import { Request, Response, NextFunction } from 'express';
import { superHeroService } from '../services/superHeroes';


class Controller {

    public async getAllSuperHero(req: Request, res: Response) {

        try {

            res.json(await superHeroService.list())

        } catch (error) {

            res.json({ message: error.message });

        }

    }

    public async addSuperHero(req: Request, res: Response) {
        try {

            if (!req.is('application/json')) throw Error("Expects 'application/json'");
            res.json(await superHeroService.create(req.body));

        } catch (error) {

            res.json({ message: error.message });

        }
    }

    public async updateSuperHero(req: Request, res: Response) {

        try {

            if (!req.is('application/json')) throw Error("Expect and aplication/json");
            res.json(await superHeroService.modify({ ...req.body, id: req.params.superHeroId }))

        } catch (error) {

            res.json({ message: error.message });

        }
    }

    public async getSuperHeroById(req: Request, res: Response) {

        try {

            res.json(await superHeroService.getById(+req.params.superHeroId));

        } catch (error) {

            res.json({ message: error.message });

        }
    }

    public async deleteSuperHero(req: Request, res: Response) {

        try {

            res.json(await superHeroService.remove(+req.params.superHeroId));

        } catch (error) {

            res.json({ message: error.message });

        }
    }
}

export { Controller }
