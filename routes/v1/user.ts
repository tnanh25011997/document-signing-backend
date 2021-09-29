import * as userFunctions from "../../controllers/api/UserController";
const express = require("express");
const router = express.Router({ mergeParams: true });

router.route("/").post(userFunctions.createUser);

module.exports = router;
