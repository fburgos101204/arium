import { Request, Response } from 'express';
import { ErrorHandle } from '../utils/error.handle';
import { AllUsers, OneUser, createUsers, updateUser, deleteUsers } from '../services/user.service'

export const getUsers = async (req: Request, res: Response) => {
    try {
        const response = await AllUsers();
        res.send(response);
    } catch (error) {
        ErrorHandle(res, `Ha ocurrido un error en getUsers: ${error}`)
    }
}

export const getUser = async (req: Request, res: Response) => {
    try {
        const response = await OneUser(req.params.id);
        res.send(response);
    } catch (error) {
        ErrorHandle(res, `Ha ocurrido un error en getUser: ${error}`)
    }
}

export const putUser = async (req: Request, res: Response) => {
    try {
        const response = await updateUser(req.body);
        res.send(response);
    } catch (error) {
        ErrorHandle(res, `Ha ocurrido un error en putUser: ${error}`)
    }
}

export const postUser = async (req: Request, res: Response) => {
    try {
        const response = await createUsers(req.body);
        res.send(response);
    } catch (error) {
        ErrorHandle(res, `Ha ocurrido un error en postUser: ${error}`)
    }
}

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const response = await deleteUsers(req.params.id);
        res.send(response);
    } catch (error) {
        ErrorHandle(res, `Ha ocurrido un error en deleteUser: ${error}`)
    }
}

export default { getUsers, getUser, putUser, deleteUser };
