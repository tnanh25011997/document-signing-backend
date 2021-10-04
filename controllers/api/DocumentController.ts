import DocumentService from "../../services/DocumentService";
import { sendMailService } from "../../services/MailService";
import SignerService from "../../services/SignerService";
import { CreateDocumentRequest } from "../handleRequests/Document";
import { CreateSignerRequest } from "../handleRequests/Signer";
import * as variables from "../../base/variable";

export const createDocument = async (req: any, res: any, next: any) => {
    try {
        const {
            name,
            url,
            user_id,
            status,
            signature_type_id,
            is_require_signature,
            email,
            phone_number,
            full_name,
            role_id,
        } = req.body;
        const document: CreateDocumentRequest = {
            name,
            url,
            user_id,
            status,
            signature_type_id,
            is_require_signature,
        };
        const documentResult = await DocumentService._.createDocument(document);
        const signer: CreateSignerRequest = {
            email,
            phone_number,
            full_name,
            document_id: documentResult._id,
            role_id,
        };
        const signerResult = await SignerService._.createSigner(signer);

        sendMailService(
            signerResult?.email,
            variables.DETAIL_DOCUMENT_URL + documentResult._id
        );
        res.success(documentResult);
    } catch (error) {
        res.error(error.name, error.message, error.statusCode);
    }
};

export const getDetailDocument = async (req: any, res: any, next: any) => {
    try {
        const id = req.params.id;
        const documentResult = await DocumentService._.getDetailDocument(id);
        res.success(documentResult);
    } catch (error) {
        res.error(error.name, error.message, error.statusCode);
    }
};

export const signDocument = async (req: any, res: any, next: any) => {
    try {
        const id = req.params.id;
        const is_signed = req.body.is_signed;
        const documentResult = await DocumentService._.signDocument(
            id,
            is_signed
        );
        res.success(documentResult);
    } catch (error) {
        res.error(error.name, error.message, error.statusCode);
    }
};
