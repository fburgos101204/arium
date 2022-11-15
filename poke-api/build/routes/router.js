"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Router = void 0;
class Router {
    routes(app) {
        //example route
        app.route("/api/reprice/").get();
    }
}
exports.Router = Router;
