import express from 'express';
import { getUsers, getUser, postUser, deleteUser, putUser } from '../controllers/user.controller';

export class GeneralRoutes {

    public routes(router: express.Express): void {

        //User Routes
        router.get('/v1/user', getUsers);
        router.get('/v1/user/:id', getUser);
        router.put('/v1/user/:id', putUser);
        router.post('/v1/user', postUser);
        router.delete('/v1/user/:id', deleteUser);
    }
}
export default new GeneralRoutes();
