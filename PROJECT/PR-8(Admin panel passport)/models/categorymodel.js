const mongoose=require('mongoose')

const categoryschema=mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    status:{
        type:String,
       default:'deactive'
    }
})
const category=mongoose.model('category',categoryschema)
module.exports=category