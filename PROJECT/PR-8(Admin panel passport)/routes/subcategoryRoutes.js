const express = require('express');

const passport = require("passport");

const { addSubCategory, viewSubCategory, addSubCategoryPage, deleteSubCategory, editSubCategory, updateSubCategory,changeStatus } = require('../controllers/subcategorycontroller');

const routes = express.Router();

routes.use('/addsubcategory', addSubCategory);
routes.post('/addsubcategoryfield', addSubCategoryPage);
routes.use('/viewsubcategory', viewSubCategory);

routes.get('/deletesubcategory', deleteSubCategory);
routes.get('/editsubcategory', editSubCategory);
routes.post('/updatesubcategory', updateSubCategory);

routes.get('/changeStatus', changeStatus);

module.exports = routes;