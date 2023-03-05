require('dotenv').config()
const express=require('express');
const axios=require('axios');
const cheerio=require('cheerio');
const cors=require('cors');
const helmet=require('helmet');
const xss=require('xss-clean')
const connectDb=require('./db/connect');
const port=process.env.PORT||5005;
const route=require('./routes/news')
const App=express();
App.use(express.json())
App.use(helmet())
App.use(xss())
App.use(cors());
App.use('/',route);
const newspapers=[
    {
        name:'thetimes',
        address:'https://www.thetimes.co.uk/environment/climate-change',
        base:''
    },
    {
        name:'theguardian',
        address:'https://www.theguardian.com/environment/climate-crisis',
        base:''
    },
    {
        name:'thetelegraph',
        address:'https://www.telegraph.co.uk/climate-change',
        base:'https://www.telegraph.co.uk',
    }
]
const articles=[];
newspapers.forEach((newspaper)=>{
    axios.get(newspaper.address).then((response)=>{
        const htmlData=response.data;
        const $=cheerio.load(htmlData);
        $('a:contains("climate")',htmlData).each(function(){
            const title=$(this).text();
            const url=$(this).attr('href');
            //const img=$(this).attr('src');
            articles.push({
                title,
                url:newspaper.base + url,
                source:newspaper.name,
                img:newspaper.img
            })
        })
    })
})
App.get('/news',(req,res)=>{
   res.json(articles)
})
App.get('/news/:newspaperID',(req,res)=>{
    const newspaperid=req.params.newspaperID;
    const newspaperAddress=newspapers.filter(newspaper=>newspaper.name===newspaperid)[0].address;
    const newspaperBase=newspapers.filter(newspaper=>newspaper.name===newspaperid)[0].base;
    axios.get(newspaperAddress).then((response)=>{
        const htmlData2=response.data;
        const $=cheerio.load(htmlData2);
        const specificArticle=[];
        $('a:contains("climate")',htmlData2).each(function(){
            const title=$(this).text();
            const url=$(this).attr('href');
            specificArticle.push(
            {
                title,
                url:newspaperBase + url,
                source:newspaperid 
            }
        )
        })
        res.json(specificArticle)
    })
})
const Start=async()=>{
    try{
        await connectDb(process.env.MONGO_URI);
        App.listen(port,()=>{
            console.log(`listening to port ${port}`)
        }
        )
    }
    catch(err){
        console.log(err);
    }
}
Start();