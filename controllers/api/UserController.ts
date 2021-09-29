import { executeError } from "../../base/excuteError";
import { UserRepo } from "../../repositories/UserRepository";

const userRepo = UserRepo.getInstance();

export const createUser = async (req: any, res: any, next: any) => {
    try {
        const user = await userRepo.create(req.body);
        res.success(user);
    } catch (error) {
        res.error(error.name, error.message, error.statusCode);
    }
};
