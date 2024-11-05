const urlModel =require('./../model/url')
const shortid =require('shortid')

const generateShortId =()=>{
    return shortid.generate()
}

exports.addUrl =async(req,res) =>{
    
    try{
        const {originalUrl} =req.body;
        const shortId = generateShortId();
        const newUrl =await urlModel.create({originalUrl,shortId})
        res.status(201)
    .json(
        {
            status :"Success",
            msg :"Url added succesfully",
            data: {
                url: newUrl
            
        }
    }) 
    }
    catch(err){
        console.log(err)
        res.status(404)
    .json(
        {
            status :"Fail",
            msg :err.message
        })
    }
}
exports.getUrlById =async(req,res) =>{
    
    try{
        const {shortId} = req.params;
        const Url =await urlModel.findOne({shortId})
        //res.redirect(Url.originalUrl)
        res.status(200)
            .json(
                {
                    status :"Success",
                    data :{
                        urlDetails :Url
                    }
                })
        
    }
    catch(err){
        console.log(err)
        if(!Url){
            res.status(404)
            .json(
                {
                    status :"Fail",
                    msg :"Short url not found"
                })
        }
    }
}

exports.updateUrl =async(req,res) =>{
    try{
        const {shortId} = req.params;
        const originalUrl =req.body.originalUrl
        const newShortId = shortid.generate()

        const updatedUrl =await urlModel.findOneAndUpdate({shortId},{originalUrl,shortId: newShortId},{
            new: true,
            runValidators :true
            
        })
        res.status(200)
            .json(
                {
                    status :"Success",
                    data :{
                        newurlDetails : updatedUrl
                    }
                })
        
    }
    catch(err){
        console.log(err)
        res.status(404).json({
            status: "Fail",
            
            msg: "No Urls found ..please check id"
        });
    }
}

exports.getAllUrl = async(req,res) =>{
    
    try{
        const Url =await urlModel.find()
        res.status(200)
            .json(
                {
                    status :"Success",
                    results:Url.length,
                    data :{
                        urlDetails :Url
                    }
                })
        
    }
    catch(err){
        console.log(err)
        res.status(404).json({
            status: "Fail",
            
            msg: "No Urls found"
        });
    }
}
exports.deleteUrlById =async(req,res) =>{
    try{
        const {shortId} = req.params;

        await urlModel.findOneAndDelete({shortId})
        res.status(200)
            .json(
                {
                    status :"Deleted Successfully",
                    data :null
                })
        
    }
    catch(err){
        console.log(err)
        res.status(404).json({
            status: "Fail",
            
            msg: "No Urls found ..please check id"
        });
    }
}




