import keys from "../config/env/keys";

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

const expireTime = 365;
const expiresIn = `${expireTime}d`;

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
