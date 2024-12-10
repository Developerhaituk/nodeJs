const categoryModel = require('../models/categorymodel');
const subcategoryModel = require('../models/subcategorymodel');
const exsubcategoryModel = require('../models/exsubcategorymodel');

const addExSubCategory = async (req, res) => {
    try {
        let category = await categoryModel.find({status:"active"})
        let subcategory = await subcategoryModel.find({status:"active"})
        return res.render('exsubcategory/addexsubcategory',{
            category,
            subcategory
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const addexsubcategorypage = async(req,res) =>{
    try {
        const { category, subcategory, exsubcategory} = req.body;
        await exsubcategoryModel.create({
            categoryid: category,
            subcategoryid: subcategory,
            exsubcategory:exsubcategory
        })
        return res.redirect("/exsubcategory/viewexsubcategory");
    } catch (err) {
        console.log(err);
        return false;
    }
}

const viewExSubCategory = async(req,res) =>{
    try {
        const exsubcategory = await exsubcategoryModel.find({}).populate("categoryid").populate("subcategoryid");
        return res.render('exsubcategory/viewexsubcategory',{
            exsubcategory
        });
    } catch (err) {
        console.log(err);
        return false
    }
};

const deleteExSubCategory = async (req, res) => {
    try {
        const id = req.query.id
        await exsubcategoryModel.findByIdAndDelete(id);
        return res.redirect("/exsubcategory/viewexsubcategory");

    } catch (err) {
        console.log(err);
        return false;
    }
};

const editExSubCategory = async (req, res) => {
    try {
        const id = req.query.id;
        let category = await categoryModel.find({});
        const subcategory = await subcategoryModel.find({}).populate('categoryid');
        const exsubcategory = await exsubcategoryModel.findById(id).populate('categoryid').populate('subcategoryid');
        return res.render('exsubcategory/editexsubcategory', {
            category: category,
            subcategory: subcategory,
            exsubcategory: exsubcategory,
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateExSubCategory = async (req, res) => {
    try {
        const { editid, category, subcategory,exsubcategory } = req.body;
        
        await exsubcategoryModel.findByIdAndUpdate(editid, {
            categoryid: category,
            subcategory: subcategory,
            exsubcategory: exsubcategory,
        })
        return res.redirect('/exsubcategory/viewexsubcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports = {
    addExSubCategory,addexsubcategorypage,viewExSubCategory,deleteExSubCategory,editExSubCategory,updateExSubCategory
}