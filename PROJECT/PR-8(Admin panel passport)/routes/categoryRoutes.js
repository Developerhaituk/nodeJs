const express = require('express');

const passport = require('passport')

const { addCategory, addcategoryfieldPage, viewCategoryPage, deleteCategory,editCategory,updateCategory,changeStatus } = require('../controllers/categorycontroller');

const routes = express.Router();

routes.use('/addcategory',passport.checkUser,addCategory);
routes.post('/addcategoryfield',addcategoryfieldPage);
routes.use('/viewcategory',passport.checkUser,viewCategoryPage);

routes.get('/deletecategory',deleteCategory);
routes.get('/editcategory',passport.checkUser,editCategory);
routes.post('/updatecategory',updateCategory);
routes.get('/changeStatus',changeStatus)

module.exports = routes;