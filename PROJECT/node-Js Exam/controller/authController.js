const usermodel = require('../models/usermodels');

const loginpage = (req, res) => {
    if (res.locals.users) {
        return res.redirect("/adminview");
      }
    return res.render('loginpage')
}
const ragister = (req, res) => {
    return res.render('ragister')
}
const ragisterUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let users = await usermodel.create({
            name: name,
            email: email,
            password: password,
        })
        return res.redirect('/')
    } catch (err) {
        console.log(err);
        return false;
    }
}
const loginUser = async (req, res) => {
 return res.redirect('/adminview')
}
const adminView = (req, res) => {
    return res.render('adminview')
}
const logout = (req, res) => {
    req.logout((err) => {
        if (err) {
            console.log(err);
            return false;
        }
        return res.redirect('/');
    });
}

module.exports = {
    loginpage, ragister, ragisterUser, loginUser,adminView,logout
}

