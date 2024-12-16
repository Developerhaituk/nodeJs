const express = require('express');

const routes = express.Router();

routes.use('/', require('../routes/authRoutes'));
routes.use('/category', require('../routes/categoryRoutes'));
routes.use('/subcategory', require('../routes/subcategoryRoutes'));
routes.use('/exsubcategory', require('../routes/exsubcategoryRoutes'));
routes.use('/product', require('../routes/productRoutes'));

module.exports = routes;