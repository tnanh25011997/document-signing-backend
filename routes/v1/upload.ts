import * as uploadFunctions from "../../controllers/api/UploadController";
import { auth } from "../../middlewares/auth";
import uploadFile from "../../services/UploadService";
import * as variables from "../../base/variable";

const express = require("express");
const router = express.Router({ mergeParams: true });

router
    .route("/single")
    .post(auth, uploadFile.single("file"), uploadFunctions.uploadPdf);
router
    .route("/multiple")
    .post(
        auth,
        uploadFile.array("file", variables.MAX_NUMBER_OF_FILE),
        uploadFunctions.uploadPdf
    );

module.exports = router;
