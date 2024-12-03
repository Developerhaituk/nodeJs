const express = require('express');

const { addCategory, addcategoryfieldPage, viewCategoryPage } = require('../controllers/categoryController');

const routes = express.Router();

routes.use('/addcategory',addCategory);
routes.post('/addcategoryfield',addcategoryfieldPage);
routes.use('/viewcategory',viewCategoryPage)

module.exports = routes;