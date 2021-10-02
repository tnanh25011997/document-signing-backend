import { CreateSignerRequest } from "../controllers/handleRequests/Signer";
import { SignerRepository } from "../repositories/SignerRepository";

const signerRepository = SignerRepository.getInstance();
class SignerService {
    private static _instance: SignerService;

    static get _() {
        if (!this._instance) {
            this._instance = new SignerService();
        }
        return this._instance;
    }

    async createSigner(request: CreateSignerRequest) {
        const newInstance = await signerRepository.create(request);
        return newInstance;
    }
}
export default SignerService;
