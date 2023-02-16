const mongoose=require('mongoose');
const loginSchema=new mongoose.Schema(
    {
        email:{
            type:String,
            required:[true,'must provide name'],
            //unique:true
        },
        comments:{
            type:String,
            maxlength:[50,'maximum characters are 20']
        }
    }
)
module.exports=mongoose.model('Sign',loginSchema);