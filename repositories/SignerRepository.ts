import { SignerInterface } from "../models/interface/SignerInterface";
import Signer from "../models/Signer";
import { BaseRepository } from "./BaseRepository";

export class SignerRepository extends BaseRepository<SignerInterface> {
    private static instance: SignerRepository;

    private constructor() {
        super();
        this.model = Signer;
    }

    public static getInstance(): SignerRepository {
        if (!SignerRepository.instance) {
            SignerRepository.instance = new SignerRepository();
        }

        return SignerRepository.instance;
    }
}
