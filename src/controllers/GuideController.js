const {getGuide}= require('../models/guideModel')

const showGuide = (req,res)=> {
    
    if(req.query.risk === undefined){
        res.status(201).json({error: "harus menyertakan param risk "});
    }else{
        getGuide(req.query,(err,results)=>{
            if (err) {
                res.send(err);
            } else {
                res.json(results)
            }
        });
    }
}


module.exports={showGuide}