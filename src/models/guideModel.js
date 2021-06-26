'use strict';

const dbConn = require('../../config/db.config');

const getGuide = (req ,res) =>{
    req.risk = '%' + req.risk + '%';
    dbConn.query("Select a.* from guide_bencana as a inner join tbl_bencana as b on b.id = a.type where b.name like N?",[req.risk],(err,results)=>{
        if (err) {
            console.log(err);
            res(err, null);
        } else {
            res(null, results);
        }
    })
}
module.exports={getGuide}