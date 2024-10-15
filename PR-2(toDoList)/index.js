let express = require('express');

let port = 8080;

let todo = express();

todo.set("view engine", "ejs");

let users = [];

todo.use(express.urlencoded());

todo.get('/', (req, res) => {
    return res.render('todo', {
        all:users
    });
});

todo.post('/insertUser',(req, res) => {
    let {task,status,date}=req.body;
    let obj={
        id: Math.floor(Math.random()*100000),
        task: task,
        status: status,
        date: date
    }
    users.push(obj);
    return res.redirect('/')
});

todo.get('/deleteUser',(req,res)=>{
    let id = req.query.newid;
    let d = users.filter(val => val.id != id);
    users = d;
    return res.redirect('/');
});

todo.get('/editUser',(req,res)=>{
    let single = users.find(val => val.id == req.query.updateid);
    return res.render('editTodo',{
        single
    })
});

todo.post('/updateUser',(req,res)=>{

    let {editid,task,status,date} = req.body;
    let update=users.map((val)=>{
        if(val.id == editid){
            val.task=task,
            val.status=status,
            val.date=date
        }
        return val;
    })
    users=update;
    return res.redirect('/');
});

todo.listen(port, (err) => {
    if (err) {
        console.log(err);
        return false;
    }
    console.log(`server is running on:- ${port}`);
});