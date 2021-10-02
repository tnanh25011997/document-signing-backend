import { ObjectId } from "mongodb";
import mongoose from "mongoose";
import { databaseValidate } from "../utils/databaseValidate";
import { DocumentInterface } from "./interface/DocumentInterface";

const DocumentSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, databaseValidate("missing", "name", "Document")],
        },
        url: {
            type: String,
            required: [true, databaseValidate("missing", "url", "Document")],
        },
        user_id: {
            type: ObjectId,
            required: [
                true,
                databaseValidate("missing", "user_id", "Document"),
            ],
        },
        status: {
            type: Number,
            default: 1,
        },
        signature_type_id: {
            type: ObjectId,
            required: [
                true,
                databaseValidate("missing", "signature_type_id", "Document"),
            ],
        },
        is_require_signature: {
            type: Boolean,
            default: true,
        },
        is_signed: {
            type: Boolean,
            default: false,
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

const Document = mongoose.model<DocumentInterface>("Document", DocumentSchema);
export default Document;
