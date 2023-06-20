require("dotenv").config();

const express = require("express");
const app = require("./app.js");
const indexRoutes = require("./routes/index.routes.js");
const ErrorHandler = require('./utils/ErrorHandler.js');

const PORT = process.env.PORT;

// response in JSON
app.use(express.json());  

// ROUTES AND MIDDLEWARES
app.use(indexRoutes);

app.use(ErrorHandler);

app.listen(PORT, () => console.log(`server running at port ${PORT}`));
