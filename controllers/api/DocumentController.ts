import { DocumentRepository } from "../../repositories/DocumentRepository";
import DocumentService from "../../services/DocumentService";
import { CreateDocumentRequest } from "../handleRequests/Document";

export const createDocument = async (req: any, res: any, next: any) => {
    try {
        const {
            name,
            url,
            user_id,
            status,
            signature_type_id,
            is_require_signature,
        } = req.body;
        const document: CreateDocumentRequest = {
            name,
            url,
            user_id,
            status,
            signature_type_id,
            is_require_signature,
        };
        const banner = await DocumentService._.createDocument(document);
        res.success(banner);
    } catch (error) {
        res.error(error.name, error.message, error.statusCode);
    }
};
