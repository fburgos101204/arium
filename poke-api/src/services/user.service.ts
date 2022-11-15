import { User } from "../interfaces/user.interface";
import UserModel from "../models/user.model"
import { CustomResponse } from "../utils/custom-response";
import { v4 as uuidv4 } from 'uuid';

const createUsers = async (user: User): Promise<CustomResponse<User>> => {
    const existEmail = await UserModel.exists({ email: user.email });

    if (existEmail) {
        return { success: false, data: null, message: `Este usuario ya está registrado bajo el id: ${existEmail._id}` };
    }

    user.createdDate = new Date();
    user._id = uuidv4();
    const createdUser = await UserModel.create(user);
    return { success: true, data: createdUser, message: "Usuario registrado correctamente" };
}

const AllUsers = async (): Promise<CustomResponse<User[]>> => {
    const allUser = await UserModel.find({});

    if (!allUser) {
        return { success: false, data: null, message: "No se encontraron usuarios en la bd" };
    }
    return { success: true, data: allUser, message: "Usuarios encontrados." };
}

const OneUser = async (id: string): Promise<CustomResponse<User>> => {
    const user = await UserModel.findOne({ _id: id });

    if (!user) {
        return { success: false, data: null, message: `No se encontro ningun usuario con este Id ${id}` };
    }
    return { success: true, data: user, message: "Usuario encontrado." };
}

const updateUser = async (user: User): Promise<CustomResponse<any>> => {
    const userExist = await UserModel.exists({ _id: user._id });

    if (!userExist) {
        return { success: false, data: null, message: 'El usuario no existe' };
    }

    const updatedUser = await UserModel.updateOne(user);
    return { success: true, data: updatedUser, message: "Usuario actualizado correctamente" };
}

const deleteUsers = async (id: string): Promise<CustomResponse<any>> => {
    const userExist = await UserModel.exists({ _id: id });

    if (!userExist) {
        return { success: false, data: null, message: `No se encontro ningun usuario con este Id ${id}` };
    }

    const deletedUser = await UserModel.deleteOne({ _id: id });
    return { success: true, data: deletedUser, message: "Usuario eliminado correctamente" };
}

export { createUsers, AllUsers, OneUser, updateUser, deleteUsers };
