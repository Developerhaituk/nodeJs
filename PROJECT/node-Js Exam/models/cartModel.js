
const mongoose = require('mongoose')
const passport = require('passport')


const cartschema = mongoose.Schema({
    productName: {
        type: String,
        require: true
    },
    price : {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    qty  : {
        type: String,
        require: true
    }, 
    image : {
        type: String,
        require: true
    },
    
})

const cart = mongoose.model('cart', cartschema )

module.exports = cart