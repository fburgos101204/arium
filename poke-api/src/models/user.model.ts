import { model, Schema } from 'mongoose';
import { User } from '../interfaces/user.interface';

const UserSchema = new Schema<User>(
    {
        _id: {
            type: String,
            unique: true,
        },
        createdDate: {
            type: Date
        },
        email: {
            type: String,
            unique: true,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        role: {
            type: String,
            enum: ['admin', 'user'],
            required: false
        }
    },
    {
        timestamps: false,
        versionKey: false
    }
);

const UserModel = model('User', UserSchema);
export default UserModel;
