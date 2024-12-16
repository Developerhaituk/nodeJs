const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  categoryid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  subcategoryid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subcategory",
  },
  exsubcategoryid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "exsubcategory",
  },
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  image: {
    type: String,
    require: true
  },
  status: {
    type: String,
    default: "deactive",
  },
});

const product = mongoose.model("product", productSchema);

module.exports = product;