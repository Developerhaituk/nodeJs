const express = require('express');

const routes = express.Router();

routes.use('/',require('../routes/authRoutes'));
routes.use('/category',require('../routes/categoryRoutes'))

module.exports = routes;