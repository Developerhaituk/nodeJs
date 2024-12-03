const categoryModel = require('../models/categorymodel');

const addCategory = (req,res) =>{
    return res.render('./category/addcategory')
}

const addcategoryfieldPage = async(req,res) =>{
    try {
        const {category} = req.body
        await categoryModel.create({
            name:category
        })
    } catch (err) {
        console.log('err');
        return false;
    }
}

const viewCategoryPage = async(req,res) =>{
    try {
        const single = await categoryModel.find({})
        return res.render('./category/viewcategory',{
            single
        })
        
    } catch (error) {
        console.log(error);
        return false
    }
}

module.exports ={
    addCategory,addcategoryfieldPage,viewCategoryPage
}