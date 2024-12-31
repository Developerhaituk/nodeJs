const express =  require('express');

const routes = express.Router();

const {addUser,viewUser,deleteUser,updateUser, loginUser} = require('../controllers/userController');
const { verifyToken,Admin } = require('../middleware/Auth');

routes.post('/registeruser',addUser);
routes.get('/viewuser',verifyToken,Admin,viewUser);
routes.delete('/deleteuser',verifyToken,Admin,deleteUser);
routes.put('/updateuser',verifyToken,Admin,updateUser);
routes.post('/loginuser',loginUser);

module.exports = routes;
