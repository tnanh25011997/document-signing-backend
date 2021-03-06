import mongoose from "mongoose";

export interface UserInterface extends mongoose.Document {
    email: string;
    phone_number: string;
    password: string;
    full_name: string;
    created_at: Date;
    updated_at: Date;
}
