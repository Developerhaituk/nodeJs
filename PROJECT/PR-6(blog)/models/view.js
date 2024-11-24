
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
// const users=mongoose.model('user2',userschema)
const users=mongoose.model('users1',userschema)
module.exports=users
