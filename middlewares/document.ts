import responseCode from "../base/responseCode";
import { DocumentRepository } from "../repositories/DocumentRepository";
const ObjectId = require("mongoose").Types.ObjectId;

const { body, validationResult } = require("express-validator");

export const createDocumentRule = [
    body("name").exists().withMessage("Missing name of document"),
    body("url").exists().withMessage("Missing url of document"),
    body("user_id").exists().withMessage("Missing user_id"),
    body("signature_type_id").exists().withMessage("Missing signature type"),
    body("email").exists().withMessage("Missing email of signer"),
    body("phone_number").exists().withMessage("Missing phone number of signer"),
    body("full_name").exists().withMessage("Missing name of signer"),
    body("role_id").exists().withMessage("Missing role of signer"),
];

export const createDocumentValidate = (req, res, next) => {
    const error = validationResult(req).formatWith(({ msg }) => msg);
    const hasError = !error.isEmpty();
    if (hasError) {
        res.error("VALIDATION_ERROR", error.array()[0], 422);
    } else next();
};

export const findDocumentMiddleware = async (req, res, next) => {
    try {
        const documentId = req.params.id;
        if (!ObjectId.isValid(documentId)) {
            res.error(
                responseCode.NOT_FOUND.name,
                "Invalid Id",
                responseCode.NOT_FOUND.code
            );
            return;
        }
        let document: any = await DocumentRepository.getInstance().findOne({
            _id: documentId,
        });
        if (!document) {
            res.error(
                responseCode.NOT_FOUND.name,
                "Document not found",
                responseCode.NOT_FOUND.code
            );
            return;
        }
        next();
    } catch (error) {
        res.error(error.name, error.message, error.statusCode);
        return;
    }
};
