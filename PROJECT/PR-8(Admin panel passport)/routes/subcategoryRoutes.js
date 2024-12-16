const express = require('express');

const passport = require("passport");

const { addSubCategory, viewSubCategory, addSubCategoryPage, deleteSubCategory, editSubCategory, updateSubCategory,changeStatus } = require('../controllers/subcategorycontroller');

const routes = express.Router();

routes.get('/addsubcategory',passport.checkUser, addSubCategory);
routes.post('/addsubcategoryfield', addSubCategoryPage);
routes.use('/viewsubcategory',passport.checkUser, viewSubCategory);

routes.get('/deletesubcategory', deleteSubCategory);
routes.get('/editsubcategory',passport.checkUser, editSubCategory);
routes.post('/updatesubcategory', updateSubCategory);

routes.get('/changeStatus', changeStatus);

module.exports = routes;