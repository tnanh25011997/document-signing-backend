import mongoose from "mongoose";

export interface SignatureTypeInterface extends mongoose.Document {
    name: string;
    status: number;
    created_at: Date;
    updated_at: Date;
}
