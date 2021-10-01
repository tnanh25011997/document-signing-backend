import keys from "../../config/env/keys";
import { UserRepo } from "../../repositories/UserRepository";

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const expireTime = 365;
const expiresIn = `${expireTime}d`;
const userRepo = UserRepo.getInstance();

export const login = async (req, res, next) => {
    try {
        let { email, password } = req.body;
        email = email.toLowerCase();
        let user: any = await userRepo.findOne({ email });
        if (!user) return res.error("Email not found", 404);
        const check = await comparePasswordString(password, user.password);
        if (!check) return res.error("Wrong Password");
        const tokenResult = getAccessToken(user);
        return res.success(tokenResult, "Successfully");
    } catch (error) {
        res.error(error.name, error.message, error.statusCode);
    }
};

export function getAccessToken(user) {
    const token = jwt.sign({ _id: user._id }, keys.jwtSecret, {
        expiresIn: expiresIn,
    });
    return token;
}

export const comparePasswordString = (passwordAttempt, password) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(passwordAttempt, password, (err, isMatch) =>
            err ? reject(err) : resolve(isMatch)
        );
    });
};
