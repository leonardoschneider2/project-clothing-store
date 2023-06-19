const express = require("express");
const loginRoutes = require("./login.routes.js");

const indexRoutes = express();

indexRoutes.use("/logs", loginRoutes);

module.exports = indexRoutes;