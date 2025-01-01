
const mongoose = require('mongoose')
const passport = require('passport')


const Productschama = mongoose.Schema({
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

const Product = mongoose.model('product', Productschama)

module.exports = Product