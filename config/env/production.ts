import { config } from "dotenv";
config();

export default {
    mongoDbUrl: process.env.MONGO_URI_PRODUCTION,
    jwtSecret: process.env.JWT_SECRET_PRODUCTION,
    host: process.env.HOST_PRODUCTION,
    whitelist: "*",
};
