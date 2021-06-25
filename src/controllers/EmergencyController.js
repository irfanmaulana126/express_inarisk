const {getEmergency,getEmergencyById} = require('../models/emergencyModel')

const showEmergency = (req,res)=> {
    
    if(req.query.start === undefined || req.query.limit === undefined){
        res.status(201).json({error: "harus menyertakan param start dan limit"});
    }else{
        getEmergency(req.query,(err,results)=>{
            if (err) {
                res.send(err);
            } else {
                res.json(results)
            }
        });
    }
}

const  showEmergencyById= (req,res)=>{
    if(req.query.start === undefined || req.query.limit === undefined){
        res.status(201).json({error: "harus menyertakan param start dan limit"});
    }else{
        getEmergencyById(req.query,(err,results)=>{
            if (err) {
                res.send(err)
            } else {
                res.json(results)
            }
        });
    }
}

module.exports={showEmergency,showEmergencyById}