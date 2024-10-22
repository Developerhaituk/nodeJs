let express = require('express');

let port = 8000;

let app = express();

let db = require('./config/db');

let userModel = require('./models/userModel');

const user = require('./models/userModel');

app.use(express.urlencoded({ extended: true }))

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    return res.render('add');
})

app.get('/view', (req, res) => {
    user.find({})
    .then((data) => {
        return res.render('view', {
                record : data
            })
        }).catch((err) => {
            console.log(err);
            return false;
        })
});

app.post('/insertUser', (req, res) => {
    let { name, number, email, password, gender, hobby, city } = req.body;
    userModel.create({
        name: name,
        number: number,
        email: email,
        password: password,
        gender: gender,
        hobby: hobby,
        city: city
    }).then((data, err) => {
        if (err) {
            console.log(err);
            return false;
        }
        console.log(`record added successfully`);
        return res.redirect('/')
    });
});

app.get('/deleteRecord',(req,res)=>{
    let id = req.query.deleteId;
    user.findByIdAndDelete(id)
    .then((data)=>{
        return res.redirect('/view');
    }).catch((err)=>{
        console.log(err);
        return false;
    })
});

app.get('/editRecord',(req,res)=>{
    let id = req.body.id;
    user.findById(id)
    .then((single)=>{
        return res.render('edit',{
            data : single
        })
    }).catch((err)=>{
        console.log(err);
        return false;
    })
});

app.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is running on port:${port}`);
})