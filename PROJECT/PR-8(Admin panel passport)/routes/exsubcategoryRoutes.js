const express = require('express');

const passport = require("passport");

const { addExSubCategory, addexsubcategorypage, viewExSubCategory, deleteExSubCategory, editExSubCategory, updateExSubCategory,ajaxCatFetch,changeStatus } = require('../controllers/Exsubcategorycontroller');

const routes = express.Router();

routes.get('/addexsubcategory',passport.checkUser, addExSubCategory);
routes.post('/addexsubcategoryfield', addexsubcategorypage);
routes.get('/viewexsubcategory',passport.checkUser,viewExSubCategory);

routes.get('/deleteexsubcategory',deleteExSubCategory);
routes.get('/editexsubcategory',passport.checkUser,editExSubCategory);
routes.post('/updateexsubcategory', updateExSubCategory);
routes.get('/ajaxcatfetch',ajaxCatFetch);

routes.get('/changeStatus', changeStatus);

module.exports = routes