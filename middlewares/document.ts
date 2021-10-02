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
