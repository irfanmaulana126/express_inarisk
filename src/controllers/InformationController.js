const {getInformation,getInformationByType,getInformationById} = require('../models/informationModel')

const showInformation = (req,res)=> {
    if(req.query.start === undefined|| req.query.limit === undefined){

        res.status(201).json({error: "harus menyertakan param start dan limit"});
    }else{
        getInformation(req.query,(err,results)=>{
            if (err) {
                res.send(err);
            } else {
                res.json(results)
            }
        });
    }
}

const  showInformationByType = (req,res)=>{
    if(req.params.id === undefined){
        res.status(201).json({error: "harus menyertakan param id "});
    }else{
        getInformationByType(req.params,(err,results)=>{
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        });
    }
}

const showInformationById =(req ,res)=>{
    if(req.params.id === undefined){
        res.status(201).json({error: "harus menyertakan param id"});
    }else{
        getInformationById(req.params,(err,results)=>{
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        });
    }
}

module.exports={showInformation,showInformationById,showInformationByType}