const route = require("express")();

const user = require("./v1/user");
const auth = require("./v1/auth");

route.use("/api/v1/users", user);
route.use("/api/v1/auth", auth);

route.get("/", (req, res) => res.send("Welcome to Document Signing Project"));

module.exports = route;
