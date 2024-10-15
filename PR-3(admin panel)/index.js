let express = require('express');

let port = 8000;

let app = express();

app.set('view engine','ejs');

let path = require('path');

app.use ('/',express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    return res.render('index');
});

app.get('/chart',(req,res)=>{
    return res.render('chart');
});

app.get('/widget',(req,res)=>{
    return res.render('widget');
});

app.get('/tables',(req,res)=>{
    return res.render('tables');
});

app.get('/fullWidth',(req,res)=>{
    return res.render('fullWidth');
});

app.get('/basicForm',(req,res)=>{
    return res.render('basicForm');
});

app.get('/formWizard',(req,res)=>{
    return res.render('formWizard');
});

app.get('/button',(req,res)=>{
    return res.render('pagebutton');
});

app.get('/icon',(req,res)=>{
    return res.render('icon');
});

app.get('/fontawesome',(req,res)=>{
    return res.render('fontawesome');
});

app.get('/pagesElement',(req,res)=>{
    return res.render('pagesElement');
});

app.get('/dash2',(req,res)=>{
    return res.render('dash2');
});

app.get('/gallery',(req,res)=>{
    return res.render('gallery');
});

app.get('/pagecallender',(req,res)=>{
    return res.render('pagecallender');
});

app.get('/pageInvoice',(req,res)=>{
    return res.render('pageInvoice');
});

app.get('/pagechat',(req,res)=>{
    return res.render('pagechat');
});

app.get('/login',(req,res)=>{
    return res.render('login');
});

app.get('/register',(req,res)=>{
    return res.render('register');
});

app.get('/error403',(req,res)=>{
    return res.render('error403');
});

app.get('/error404',(req,res)=>{
    return res.render('error404');
});

app.get('/error405',(req,res)=>{
    return res.render('error405');
});

app.get('/error500',(req,res)=>{
    return res.render('error500');
});



app.listen(port,(err)=>{
    if(err){
        console.log(err);
    }
    console.log(`server is running on port:- ${port}`);
});