const categoryModel = require('../models/categorymodel');
const subcategoryModel = require('../models/subcategorymodel');

const addSubCategory = async (req, res) => {

    try {
        let category = await categoryModel.find({status:"active"})
        return res.render('subcategory/addsubcategory', {
            category: category
        });
    } catch (err) {
        console.log(err);
        return false;
    }

}

const addSubCategoryPage = async (req, res) => {
    try {
        const { category, subcategory } = req.body;
        await subcategoryModel.create({
            categoryid: category,
            subcategory: subcategory,
        })
        return res.redirect("/subcategory/viewsubcategory");
    } catch (err) {
        console.log(err);
        return false
    }
}

const viewSubCategory = async (req, res) => {
    try {
        const subcategory = await subcategoryModel.find({}).populate("categoryid");
        return res.render("subcategory/viewsubcategory", {
            subcategory: subcategory,
        });
    } catch (error) {
        console.log(error);
        return false;
    }
}

const deleteSubCategory = async (req, res) => {
    try {
        const id = req.query.id
        await subcategoryModel.findByIdAndDelete(id);
        return res.redirect("/subcategory/viewsubcategory");

    } catch (err) {
        console.log(err);
        return false;
    }
}

const editSubCategory = async (req, res) => {
    try {
        const id = req.query.id;
        let category = await categoryModel.find({});
        const single = await subcategoryModel.findById(id).populate('categoryid');
        return res.render('subcategory/editsubcategory', {
            category: category,
            single: single
        });
    } catch (err) {
        console.log(err);
        return false;
    }
}

const updateSubCategory = async (req, res) => {
    try {
        const { editid, category, subcategory } = req.body;

        await subcategoryModel.findByIdAndUpdate(editid, {
            categoryid: category,
            subcategory: subcategory
        })
        return res.redirect('/subcategory/viewsubcategory');
    } catch (err) {
        console.log(err);
        return false;
    }
};

const changeStatus = async (req, res) => {
    try {
        const status = req.query.status;
        const id = req.query.id;
        if (status == "active") {
            await subcategoryModel.findByIdAndUpdate(id, {
                status: "deactive"
            });
        } else {
            await subcategoryModel.findByIdAndUpdate(id, {
                status: "active"
            });
        }
        return res.redirect("/subcategory/viewsubcategory");
    } catch (err) {
        console.log(err);
        return false;
    }
};

module.exports = {
    addSubCategory, addSubCategoryPage, viewSubCategory, deleteSubCategory, editSubCategory, updateSubCategory, changeStatus
}