import * as documentFunctions from "../../controllers/api/DocumentController";
import { auth } from "../../middlewares/auth";
import {
    createDocumentRule,
    createDocumentValidate,
    findDocumentMiddleware,
} from "../../middlewares/document";
const express = require("express");
const router = express.Router({ mergeParams: true });

router
    .route("/")
    .post(
        auth,
        createDocumentRule,
        createDocumentValidate,
        documentFunctions.createDocument
    );

router
    .route("/:id")
    .get(findDocumentMiddleware, documentFunctions.getDetailDocument)
    .put(findDocumentMiddleware, documentFunctions.signDocument);

module.exports = router;
