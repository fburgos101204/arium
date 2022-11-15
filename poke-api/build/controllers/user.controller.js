"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.postUser = exports.updateUser = exports.getUser = exports.getUsers = void 0;
const error_handle_1 = require("../utils/error.handle");
const user_service_1 = require("../services/user.service");
const getUsers = (req, res) => {
    try {
        const userList = (0, user_service_1.AllUsers)();
        res.send(userList);
    }
    catch (error) {
        (0, error_handle_1.ErrorHandle)(res, `Ha ocurrido un error en getUsers: ${error}`);
    }
};
exports.getUsers = getUsers;
const getUser = (req, res) => {
    try {
        console.log('doing something well with users');
        res.send('Fetching User data');
    }
    catch (error) {
        (0, error_handle_1.ErrorHandle)(res, `Ha ocurrido un error en getUser: ${error}`);
    }
};
exports.getUser = getUser;
const updateUser = (req, res) => {
    try {
        console.log('develop');
    }
    catch (error) {
        (0, error_handle_1.ErrorHandle)(res, `Ha ocurrido un error en updateUser: ${error}`);
    }
};
exports.updateUser = updateUser;
const postUser = (req, res) => {
    try {
        console.log('develop');
    }
    catch (error) {
        (0, error_handle_1.ErrorHandle)(res, `Ha ocurrido un error en postUser: ${error}`);
    }
};
exports.postUser = postUser;
const deleteUser = (req, res) => {
    try {
        console.log('develop');
    }
    catch (error) {
        (0, error_handle_1.ErrorHandle)(res, `Ha ocurrido un error en deleteUser: ${error}`);
    }
};
exports.deleteUser = deleteUser;
exports.default = { getUsers: exports.getUsers, getUser: exports.getUser, updateUser: exports.updateUser, deleteUser: exports.deleteUser };
