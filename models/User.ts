import mongoose from "mongoose";
import { databaseValidate } from "../utils/databaseValidate";
import { UserInterface } from "./interface/UserInterface";
const paginate = require("./plugins/paginate");
const aggregatePaginate = require("./plugins/aggregatePaginate");

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, databaseValidate("missing", "email", "User")],
        },
        phone_number: {
            type: String,
            required: [true, databaseValidate("missing", "phone", "User")],
        },
        password: {
            type: String,
            required: [databaseValidate("missing", "password", "User")],
        },
        full_name: {
            type: String,
            required: [databaseValidate("missing", "full_name", "User")],
        },
    },
    {
        versionKey: false,
        timestamps: {
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    }
);

UserSchema.plugin(paginate);
UserSchema.plugin(aggregatePaginate);

const UserModel = mongoose.model<UserInterface>("User", UserSchema);
export default UserModel;
