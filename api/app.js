const express = require("express");
const app = express();
const mongoose = require("mongoose");
require("dotenv/config");

const testRoutes = require("./test/test");

app.use("/test", testRoutes);

mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useNewUrlParser: true },
    () => {
        console.log("connected to db");
    }
);

app.listen(8080);
