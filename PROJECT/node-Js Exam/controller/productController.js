const productmodel = require('../models/productModel')
const cartmodel = require('../models/cartModel')
const fs = require('fs')
const addProduct = (req, res) => {
    return res.render('addproduct')
}

const viewData = async (req, res) => {
    try {

        const user = await productmodel.find({});

        return res.render('viewdata', {
            user
        });

    } catch (error) {
        console.log(err);
        return false;
    }
    // return res.render('viewdata')
}
const insertProduct = async (req, res) => {
    try {
        const { productName, price, description, qty } = req.body
        const user = await productmodel.create({
            productName: productName,
            price: price,
            description: description,
            qty: qty,
            image: req.file.path
        })
        return res.redirect('/product/viewdata')
    } catch (err) {
        console.log(err);
        return false;
    }

}
const deleteproduct = async (req, res) => {
    try {
        const id = req.query.id

        let single = await productmodel.findById(id);
        fs.unlinkSync(single.image);

        await productmodel.findByIdAndDelete(id);
        return res.redirect("/product/viewdata");
    } catch (err) {
        console.log(err);
        return false;
    }
}
const editeproduct = async (req, res) => {
    try {
        const id = req.query.id;

        const product = await productmodel.findById(id)
        return res.render('editproduct', {
            product
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}
const updateproduct = async (req, res) => {
    try {
        const { id, productName, description, price, qty } = req.body;
        console.log(id);


        if (req.file) {
            const single = await productmodel.findById(id);


            fs.unlinkSync(single.image);
            await productmodel.findByIdAndUpdate(id, {
                productName: productName,
                description: description,
                price: price,
                qty: qty,
                image: req.file.path
            });
            return res.redirect("/product/viewdata");
        } else {
            const product = await productmodel.findById(id);

            await productmodel.findByIdAndUpdate(id, {
                productName: productName,
                description: description,
                price: price,
                qty: qty,
                image: product.image
            });
            return res.redirect("/product/viewdata");
        }
    } catch (err) {
        console.log(err);
    }
}

// cart

const addToCart = async (req, res) => {
    try {
        const id = req.query.id;
        const cart = await productmodel.findById(id);

        await cartmodel.create({
            productName: cart.productName,
            price: cart.price,
            qty: cart.qty,
            description: cart.description,
            image: cart.image
        });
        return res.redirect("/product/viewdata");

    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewCart =async (req, res) =>{
    try {
           const cartitem = await cartmodel.find({});
                //  console.log(Cratitem);
                 return res.render('addtocart',{cartmodel: cartitem});
    } catch (err) {
        console.log(err);
        return false;
    }
}

const deletecart =  async (req, res) =>{
    try {
        const id =req.query.id;
        await cartmodel.findByIdAndDelete(id);
         return res.redirect('/Product/viewCart');     
    } catch (err) {
        console.log(err);
        return false;
    }
}

const editcart = async(req,res) =>{
    try {
        const id = req.query.id;

        const cart = await cartmodel.findById(id)
        return res.render('editcart', {
            cart
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updatecart = async(req,res) =>{
    try {
        const { id,qty } = req.body;
        await cartmodel.findById(id);

            await cartmodel.findByIdAndUpdate(id, {
                qty: qty
            });
            return res.redirect("/product/viewdata");
    } catch (error) {
        console.log(error);
        return false;
    }
}

module.exports = {
    addProduct, insertProduct, viewData, deleteproduct, editeproduct, updateproduct, addToCart,viewCart,deletecart,editcart,updatecart
}