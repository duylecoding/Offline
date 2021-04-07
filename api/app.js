const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
require("dotenv/config");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const testRoutes = require("./routes/test");

app.use("/test", testRoutes);

mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useNewUrlParser: true },
    () => {
        console.log("connected to db");
    }
);

app.listen(8080);
