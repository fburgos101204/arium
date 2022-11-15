"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorHandle = void 0;
const ErrorHandle = (res, error) => {
    res.status(500);
    res.send({ error });
};
exports.ErrorHandle = ErrorHandle;
