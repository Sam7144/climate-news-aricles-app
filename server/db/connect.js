const mongose=require('mongoose')
const connectDb=(URL)=>{
    return mongose.connect(URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
}
module.exports=connectDb;