import * as documentFunctions from "../../controllers/api/DocumentController";
import { auth } from "../../middlewares/auth";
const express = require("express");
const router = express.Router({ mergeParams: true });

router.route("/").post(auth, documentFunctions.createDocument);

module.exports = router;
