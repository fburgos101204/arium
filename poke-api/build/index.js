"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_server_1 = __importDefault(require("./app-server"));
const PORT = 3000;
app_server_1.default.app.listen(PORT, () => {
    console.log(`express listening on port: ${PORT}`);
});
