const express = require('express');
const router = express.Router();
const Test = require('../models/test')

// gets all tests
router.get('/', async (req, res) => {
    try {
        const posts = await Test.find();
        res.json(posts);
    } catch(err) {
    }
});

//gets one post
router.get('/:testId', async (req, res) => {
    const result = await Test.findById(req.params.testId);
    res.json(result);
})

router.post('/', async (req, res) => {
    const post = new Test({ 
        name: req.body.name
    });
    const savedTest = await post.save();
    res.json(savedTest);
});

//delete
router.delete('/:testId', async (req, res) => {
    await Test.remove({ _id: req.params.testId });
    res.json({ response: "OK" });
});

module.exports = router;