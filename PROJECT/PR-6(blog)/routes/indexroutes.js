const express = require('express');


const routes = express.Router(); 

const { loginpage, resiterpage, Resiterusers, loginuseres, dashbord,  addblogpage, addblogusers, viewblog, deleterecord, editrecord, upblog } = require('../controller/controller');


const multer=require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage }).single('image')

routes.get('/', loginpage);
routes.get('/register',resiterpage); 
routes.post('/insert',Resiterusers)
routes.post('/login',loginuseres)
routes.get('/addblogpage',addblogpage); 
routes.post('/addblog',upload,addblogusers)
routes.get('/viewblog',viewblog); 
routes.get('/delete',deleterecord); 
routes.get('/edit',editrecord); 
routes.post('/up',upload,upblog)

module.exports = routes;