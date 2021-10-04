import { CreateDocumentRequest } from "../controllers/handleRequests/Document";
import { DocumentRepository } from "../repositories/DocumentRepository";

const documentRepository = DocumentRepository.getInstance();
class DocumentService {
    private static _instance: DocumentService;

    static get _() {
        if (!this._instance) {
            this._instance = new DocumentService();
        }
        return this._instance;
    }

    async createDocument(request: CreateDocumentRequest) {
        const newInstance = await documentRepository.create(request);
        return newInstance;
    }
    async getDetailDocument(id: string) {
        const document = await documentRepository.getDocumentWithSigner(id);
        return document;
    }
    async signDocument(id: string, is_signed: boolean) {
        const document = await documentRepository.update(id, {
            is_signed,
        });
        return document;
    }
}
export default DocumentService;
