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
            type: Number,
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
            required: [true, databaseValidate("missing", "status", "Document")],
        },
        signing_method_id: {
            type: ObjectId,
            required: [
                true,
                databaseValidate("missing", "signing_method_id", "Document"),
            ],
        },
        is_require_signature: {
            type: Boolean,
            required: [
                true,
                databaseValidate("missing", "is_require_signature", "Document"),
            ],
        },
        is_signed: {
            type: Boolean,
            required: [
                true,
                databaseValidate("missing", "is_signed", "Document"),
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

const Document = mongoose.model<DocumentInterface>("Document", DocumentSchema);
export default Document;
