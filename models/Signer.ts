import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { databaseValidate } from "../utils/databaseValidate";
import { SignerInterface } from "./interface/SignerInterface";

const SignerSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, databaseValidate("missing", "email", "Signer")],
        },
        phone_number: {
            type: String,
            required: [
                true,
                databaseValidate("missing", "phone_number", "Signer"),
            ],
        },
        full_name: {
            type: String,
            required: [
                true,
                databaseValidate("missing", "full_name", "Signer"),
            ],
        },
        document_id: {
            type: ObjectId,
            required: [
                true,
                databaseValidate("missing", "document_id", "Signer"),
            ],
        },
        role_id: {
            type: ObjectId,
            required: [true, databaseValidate("missing", "role_id", "Signer")],
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

const Signer = mongoose.model<SignerInterface>("Signer", SignerSchema);
export default Signer;
