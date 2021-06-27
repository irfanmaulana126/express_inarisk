'use strict';

const dbConn = require('../../config/db.config');

const getInformation = (req,res) =>{
    dbConn.query("Select * from informasi_bencana where type = ? limit ?,?",[req.id,parseInt(req.start),parseInt(req.limit)],(err,results)=>{
        if (err) {
            console.log(err);
            res(err, null);
        } else {
            res(null, results);
        }
    })
}

const getInformationById = (req ,res)=>{
    dbConn.query("select * from informasi_bencana where id=? ",[req.id],(err,results)=>{
        if (err) {
            console.log(err)
            res(err,null)
        } else {
            res(null,results)
        }
    })
}

const getInformationByType = (req ,res)=>{
    dbConn.query("select a.* from informasi_bencana as a inner join tbl_bencana as b on a.type=b.id where a.type=? ",[req.id],(err,results)=>{
        if (err) {
            console.log(err)
            res(err,null)
        } else {
            res(null,results)
        }
    })
}


module.exports={getInformation,getInformationById,getInformationByType}