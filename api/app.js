const express = require('express');

const app = express();

//routes

app.get('/', (req, res) =>{
    res.send('Hello world');
});


app.listen(8080);