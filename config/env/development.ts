import { config } from "dotenv";
config();
export default {
    mongoDbUrl: process.env.MONGO_URI_DEVELOPMENT,
    jwtSecret: process.env.JWT_SECRET_DEVELOPMENT,
    host: `localhost:${process.env.PORT}`,
    whitelist: "*",
    sendgridKey: process.env.SENDGRID_API_KEY,
    sendgridEmail: process.env.SENDGRID_EMAIL,
};
