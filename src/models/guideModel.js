'use strict';

const dbConn = require('../../config/db.config');

const getGuide = (req ,res) =>{
    dbConn.query("Select a.*,b.image from guide_bencana as a inner join tbl_bencana as b on b.id = a.type where a.type=?",[req.id],(err,results)=>{
        if (err) {
            console.log(err);
            res(err, null);
        } else {
            res(null, results);
        }
    })
}
module.exports={getGuide}