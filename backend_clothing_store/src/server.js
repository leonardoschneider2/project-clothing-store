import "dotenv/config";
import express from "express";

import app from "./app.js";
import indexRoutes from "./routes/index.routes.js";

const PORT = process.env.PORT

// response in JSON
app.use(express.json());

app.use(indexRoutes);

app.listen(PORT, () => console.log(`server running at port ${PORT}`))