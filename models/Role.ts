import mongoose from "mongoose";
import { databaseValidate } from "../utils/databaseValidate";
import { RoleInterface } from "./interface/RoleInterface";

const RoleSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, databaseValidate("missing", "name", "Role")],
        },
        status: {
            type: Number,
            required: [true, databaseValidate("missing", "status", "Role")],
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

const Role = mongoose.model<RoleInterface>("Role", RoleSchema);
export default Role;
