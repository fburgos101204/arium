"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    _id: {
        type: String
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
        required: true
    }
}, {
    timestamps: false,
    versionKey: false
});
const UserModel = (0, mongoose_1.model)('User', UserSchema);
exports.default = UserModel;
