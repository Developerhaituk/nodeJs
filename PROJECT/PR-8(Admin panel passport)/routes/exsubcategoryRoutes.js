const express = require('express');

const passport = require("passport");

const { addExSubCategory, addexsubcategorypage, viewExSubCategory, deleteExSubCategory, editExSubCategory, updateExSubCategory } = require('../controllers/Exsubcategorycontroller');

const routes = express.Router();

routes.use('/addexsubcategory', addExSubCategory);
routes.post('/addexsubcategoryfield', addexsubcategorypage);
routes.get('/viewexsubcategory',viewExSubCategory);

routes.get('/deleteexsubcategory',deleteExSubCategory);
routes.get('/editexsubcategory',editExSubCategory);
routes.post('/updateexsubcategory', updateExSubCategory);

module.exports = routes