const mongoose=require('mongoose')

const categoryschema=mongoose.Schema({
    name:{
        type:String,
        require:true
    }
})
const category=mongoose.model('category',categoryschema)
module.exports=category