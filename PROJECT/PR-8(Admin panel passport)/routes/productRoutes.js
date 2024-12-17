const express = require('express');

const passport = require("passport");

const { addProduct, viewProductPage,addProductDetailPage,deleteProduct,editProduct,updateProductDetail,ajaxsubcatfetch,ajaxcatfetch } = require('../controllers/productcontroller');

const routes = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, file.fieldname + '-' + uniqueSuffix)
    }
});
const upload = multer({ storage: storage }).single('image')

// Routes
routes.get('/addproduct',passport.checkUser, addProduct);
routes.get('/viewproduct',passport.checkUser, viewProductPage);
routes.post('/addproductdetail', upload,addProductDetailPage);
routes.get('/deleteproduct',deleteProduct);
routes.get('/editeproduct',passport.checkUser,editProduct);
routes.post('/updateproductdetail',upload,updateProductDetail)

routes.get('/ajaxcatfetch',ajaxcatfetch)
routes.get('/ajaxsubcatfetch',ajaxsubcatfetch)

module.exports = routes