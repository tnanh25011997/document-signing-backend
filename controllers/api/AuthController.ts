import { UserRepo } from "../../repositories/UserRepository";
import {
    comparePasswordString,
    getAccessToken,
} from "../../services/AuthService";

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
