import express from "express";
import { registerController, loginController } from "../controller/login.controller.js";

const loginRoutes = express();

// loginRoutes.get("/read", (req, res, next) => console.log("read all login"));

loginRoutes.post("/register", (req, res, next) => registerController(req, res, next));

loginRoutes.post("/login", (req, res, next) => loginController(req, res, next))

export default loginRoutes;