import { NotFoundError } from "../base/customError";
import responseCode from "../base/responseCode";
import keys from "../config/env/keys";
import { UserRepo } from "../repositories/UserRepository";
const jwt = require("jsonwebtoken");

const AUTHORIZATION_FIELD = "Authorization";
const PREFIX = "Bearer";
const userRepository = UserRepo.getInstance();

export const auth = async (req: any, res: any, next: any) => {
    const auth_jwt = req.header(AUTHORIZATION_FIELD);

    if (!auth_jwt)
        return res.error(
            responseCode.UN_AUTHENTICATION.name,
            "Not Authorize",
            responseCode.UN_AUTHENTICATION.code
        );
    try {
        const token = auth_jwt.replace(PREFIX, "").trim();
        const data = jwt.verify(token, keys.jwtSecret);
        let user: any = await userRepository.findById(data._id);
        if (!user) throw new NotFoundError("User not found");
        req.user = user;
        req.token = token;
        next();
    } catch (error) {
        return res.error(
            responseCode.UN_AUTHENTICATION.name,
            "Not Authorize",
            responseCode.UN_AUTHENTICATION.code
        );
    }
};
