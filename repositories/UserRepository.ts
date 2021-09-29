import { UserInterface } from "../models/interface/UserInterface";
import UserModel from "../models/UserModel";
import { BaseRepository } from "./BaseRepository";

export class UserRepo extends BaseRepository<UserInterface> {
    private static instance: UserRepo;

    private constructor() {
        super();
        this.model = UserModel;
    }

    public static getInstance(): UserRepo {
        if (!UserRepo.instance) {
            UserRepo.instance = new UserRepo();
        }

        return UserRepo.instance;
    }
}
