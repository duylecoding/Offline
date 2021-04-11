const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require('cors');
require("dotenv/config");

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 8081;

const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

//https://swagger.io/specification
const options  = {
    definition :{
        openapi: '3.0.0',
        info: {
            title: 'Offline API',
            description: 'API to serve the Offline App',
            contact: {
                name: 'Duy Le',
                email: 'duylezero@gmail.com'
            },
            servers: 
            [{
                url: 'http://localhost:8080',
                description: 'local'
            }]
        }
    },
    apis: ["./routes/*.js"]
}

const swaggerDocs = swaggerJsDoc(options);
app.use('/swagger-ui', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

const testRoutes = require("./routes/test");
app.use("/test", testRoutes);

mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useNewUrlParser: true },
    () => {
        console.log("connected to mongodb");
    }
);

app.listen(port);
