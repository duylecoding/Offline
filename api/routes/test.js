const express = require('express');
const router = express.Router();
const Test = require('../models/testModels')

router.get('/', (req, res) =>{
    res.send('Hello world');
});

router.post('/', (req, res) => {
    const post = new Test({ 
        id: req.body.title,
        name: req.body.name
    });
    post.save().exec().then(data => {
        res.json(data);
    });
});

module.exports = router;