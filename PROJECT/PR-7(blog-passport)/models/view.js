
const mongoose=require('mongoose')

const userschema=mongoose.Schema({

    title:{
        type:String,
        require:true
    },
    desc:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
})
const users=mongoose.model('blogUsers',userschema)
module.exports=users
