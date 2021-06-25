'use strict';

const dbConn = require('../../config/db.config');

const getInformation = (req,res) =>{
    dbConn.query("Select * from informasi_bencana limit ?,?",[parseInt(req.start),parseInt(req.limit)],(err,results)=>{
        if (err) {
            console.log(err);
            res(err, null);
        } else {
            res(null, results);
        }
    })
}

const getInformationById = (req ,res)=>{
    req.q = '%' + req.q + '%';
    dbConn.query("select * from informasi_bencana where description like N? limit ?,?",[req.q,parseInt(req.start),parseInt(req.limit)],(err,results)=>{
        if (err) {
            console.log(err)
            res(err,null)
        } else {
            res(null,results)
        }
    })
}


module.exports={getInformation,getInformationById}