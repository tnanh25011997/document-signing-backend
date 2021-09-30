import { UserInterface } from "../models/interface/UserInterface";
import User from "../models/User";
import { BaseRepository } from "./BaseRepository";

export class UserRepo extends BaseRepository<UserInterface> {
    private static instance: UserRepo;

    private constructor() {
        super();
        this.model = User;
    }

    public static getInstance(): UserRepo {
        if (!UserRepo.instance) {
            UserRepo.instance = new UserRepo();
        }

        return UserRepo.instance;
    }
}
