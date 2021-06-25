'use strict';

const dbConn = require('../../config/db.config');

const getEmergency = (req ,res) =>{
    dbConn.query("Select * from emergency_call limit ?, ?",[parseInt(req.start),parseInt(req.limit)],(err,results)=>{
        if (err) {
            console.log(err);
            res(err, null);
        } else {
            res(null, results);
        }
    })
}

const getEmergencyById = (req ,res)=>{
    req.q = '%' + req.q + '%';
    dbConn.query("select * from emergency_call where name like N? limit ?, ?",[req.q,parseInt(req.start),parseInt(req.limit)],(err,results)=>{
        if (err) {
            console.log(err)
            res(err,null)
        } else {
            res(null,results)
        }
    })
}


module.exports={getEmergency,getEmergencyById}