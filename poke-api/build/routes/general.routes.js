"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralRoutes = void 0;
const user_controller_1 = require("../controllers/user.controller");
class GeneralRoutes {
    routes(router) {
        //example route
        router.get('/', (req, res) => {
            console.log('doing something well');
            res.send('Fetching data');
        });
        router.get('/v1/users', user_controller_1.getUsers);
        router.get('/v1/user/:id', user_controller_1.getUser);
        router.put('/v1/user/:id', user_controller_1.updateUser);
        router.post('/v1/user', user_controller_1.postUser);
        router.delete('/v1/user/:id', user_controller_1.deleteUser);
    }
}
exports.GeneralRoutes = GeneralRoutes;
exports.default = new GeneralRoutes();
