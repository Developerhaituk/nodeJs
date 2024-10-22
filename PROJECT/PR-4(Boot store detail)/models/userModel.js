let mongoose = require('mongoose');

let userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    number: {
        type: Number,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    hobby: {
        type: String,
        required: true,
    },
    city: {
        type: Array,
        required: true,
    },
})
let user = mongoose.model('user', userSchema);
module.exports = user;