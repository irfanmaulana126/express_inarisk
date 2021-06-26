'use strict';

const dbConn = require('../../config/db.config');

const getDisaster = (req ,res) =>{
    
    dbConn.query("Select * from tbl_bencana limit ?, ?",[parseInt(req.start),parseInt(req.limit)],(err,results)=>{
        if (err) {
            console.log(err);
            res(err, null);
        } else {
            res(null, results);
        }
    })
}
module.exports={getDisaster}