import { DocumentRepository } from "../../repositories/DocumentRepository";
import DocumentService from "../../services/DocumentService";
import { CreateDocumentRequest } from "../handleRequests/Document";
import * as variables from "../../base/variable";
import keys from "../../config/env/keys";

export const uploadPdf = async (req: any, res: any, next: any) => {
    try {
        const { originalUrl } = req;
        switch (originalUrl) {
            case variables.URL_UPLOAD_MULTIPLE:
                const arrayUrl: string[] = [];
                const { files } = req;
                files.forEach((file) => {
                    const fullPath = `${keys.host}/${file.path}`;
                    arrayUrl.push(fullPath);
                });
                return res.success(arrayUrl);

            default:
                const { file } = req;
                const fullPath = `${keys.host}/${file.path}`;
                return res.success(fullPath);
        }
        return;
    } catch (error) {
        res.error(error.name, error.message, error.statusCode);
    }
};
