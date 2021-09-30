import mongoose from "mongoose";
import { databaseValidate } from "../utils/databaseValidate";
import { SignatureTypeInterface } from "./interface/SignatureTypeInterface";

const SignatureTypeSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [
                true,
                databaseValidate("missing", "name", "SignatureType"),
            ],
        },
        status: {
            type: Number,
            required: [
                true,
                databaseValidate("missing", "status", "SignatureType"),
            ],
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

const SignatureType = mongoose.model<SignatureTypeInterface>(
    "Role",
    SignatureTypeSchema
);
export default SignatureType;
