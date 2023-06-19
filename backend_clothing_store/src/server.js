require("dotenv").config();

const express = require("express");
const app = require("./app.js");
const indexRoutes = require("./routes/index.routes.js");

const PORT = process.env.PORT

// response in JSON
app.use(express.json());

app.use(indexRoutes);

app.listen(PORT, () => console.log(`server running at port ${PORT}`))