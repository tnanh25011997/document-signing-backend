import * as documentFunctions from "../../controllers/api/DocumentController";
import { auth } from "../../middlewares/auth";
import {
    createDocumentRule,
    createDocumentValidate,
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

module.exports = router;
