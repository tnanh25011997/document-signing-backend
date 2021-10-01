const route = require("express")();

const users = require("./v1/user");
const auth = require("./v1/auth");
const documents = require("./v1/document");
const upload = require("./v1/upload");

route.use("/api/v1/documents", documents);
route.use("/api/v1/users", users);
route.use("/api/v1/auth", auth);
route.use("/api/v1/upload", upload);

route.get("/", (req, res) => res.send("Welcome to Document Signing Project"));

module.exports = route;
