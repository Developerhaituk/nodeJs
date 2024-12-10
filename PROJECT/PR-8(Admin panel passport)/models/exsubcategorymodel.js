const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  categoryid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "category",
  },
  subcategoryid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "subcategory",
  },
  exsubcategory: {
    type: String,
    require:true
  },
  status: {
    type: String,
    default: "deactive",
  },
});

const exsubcategory = mongoose.model("exsubcategory", userSchema);

module.exports = exsubcategory;