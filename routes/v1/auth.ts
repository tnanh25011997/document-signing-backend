import * as authFunctions from "../../controllers/api/AuthController";
const express = require("express");
const router = express.Router({ mergeParams: true });

router.route("/login").post(authFunctions.login);

module.exports = router;
