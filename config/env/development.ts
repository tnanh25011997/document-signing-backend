import { config } from "dotenv";
config();
export default {
    mongoDbUrl: process.env.MONGO_URI_DEVELOPMENT,
    jwtSecret: process.env.JWT_SECRET_DEVELOPMENT,
    host: `localhost:${process.env.PORT}`,
    whitelist: "*",
};
