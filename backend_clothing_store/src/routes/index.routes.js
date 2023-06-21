const express = require("express");
const loginRoutes = require("./login.routes.js");
const clothingsRoute = require("./clothings.routes.js");

const indexRoutes = express();

indexRoutes.use("/logs", loginRoutes);
indexRoutes.use("/clothings", clothingsRoute);

module.exports = indexRoutes;