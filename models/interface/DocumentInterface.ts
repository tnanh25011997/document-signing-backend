import mongoose from "mongoose";

export interface DocumentInterface extends mongoose.Document {
    name: string;
    url: string;
    user_id: string;
    status: number;
    signing_method_id: string;
    is_require_signature: boolean;
    is_signed: boolean;
    created_at: Date;
    updated_at: Date;
}
