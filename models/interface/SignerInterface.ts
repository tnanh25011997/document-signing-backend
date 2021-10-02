import mongoose from "mongoose";

export interface SignerInterface extends mongoose.Document {
    email: string;
    phone_number: string;
    full_name: string;
    document_id: string;
    role_id: string;
    created_at: Date;
    updated_at: Date;
}
