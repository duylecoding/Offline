const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = mongoose.model('Test', TestSchema);