const {getDisaster}= require('../models/disasterModel')

const showDisaster = (req,res)=> {
    
    if(req.query.start === undefined|| req.query.limit === undefined){
        res.status(201).json({error: "harus menyertakan param start dan limit"});
    }else{
        getDisaster(req.query,(err,results)=>{
            if (err) {
                res.send(err);
            } else {
                res.json(results)
            }
        });
    }
}


module.exports={showDisaster}