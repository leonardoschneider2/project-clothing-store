const express = require("express");

const clothingsRoute = express();

clothingsRoute.post("/register", (req, res, next) =>  registerClothingController(req, res, next));

clothingsRoute.get("/", (req, res, next) => getClothingsController(req, res, next));

clothingsRoute.get("/:id", (req, res, next) => getClothingsByIdController(req, res, next));

module.exports = clothingsRoute;