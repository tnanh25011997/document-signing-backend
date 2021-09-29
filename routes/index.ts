const route = require("express")();

const user = require("./v1/user");

route.use("/api/v1/users", user);

route.get("/", (req, res) => res.send("Welcome to Document Signing Project"));

module.exports = route;
