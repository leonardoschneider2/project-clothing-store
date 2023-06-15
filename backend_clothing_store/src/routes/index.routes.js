import express from "express";
import loginRoutes from "./login.routes.js";

const indexRoutes = express();

indexRoutes.use("/logs", loginRoutes);

export default indexRoutes;