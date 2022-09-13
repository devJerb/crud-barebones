const mongoose = require('mongoose');

const StudentSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    first: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        required: true,
    },
    section: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Student", StudentSchema);