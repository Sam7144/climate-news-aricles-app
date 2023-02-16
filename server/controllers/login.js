const Sign=require('../models/schema')
const createUser=async(req,res)=>{
    const email=req.body.email;
        const findUser=await Sign.findOne({email:email});
        if(!email||!email.includes('@')){
            res.status(422).json({msg:'invalid email address'})
           return;
       }
        if(!findUser){
            //creating new user
            
            const newUser=await Sign.create(req.body);
            res.json({
                newUser,
                msg:"successfully subscribed to our newsletter"
            })
        }
        else{
            //if user exists
            res.json({
                msg:"user already exists",
                success:true
            });
            
        }
}

module.exports={createUser};