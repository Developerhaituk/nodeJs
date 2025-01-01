const express = require('express')

const routes = express.Router()

const passport = require('passport')
const multer = require('multer')
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ storage: storage }).single('image')
const { addProduct, insertProduct,viewData,deleteproduct,editeproduct,updateproduct, addToCart , viewCart , deletecart,editcart,updatecart} = require('../controller/productController')


routes.get('/addproduct',passport.checkUser,addProduct)
routes.post('/insertproduct',upload, insertProduct)
routes.get('/viewdata',passport.checkUser,viewData)
routes.get('/deleteproduct',deleteproduct)
routes.get('/editeproduct',editeproduct)
routes.post('/updateproduct',passport.checkUser,upload,updateproduct)

// cart
routes.get('/deletecart',deletecart)
routes.get('/editcart',editcart)
routes.post('/updatecart',updatecart)


routes.get('/addtocart',addToCart)
routes.get('/viewCart',viewCart)


module.exports = routes