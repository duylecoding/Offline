const mongoose = require('mongoose');

const TestSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
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