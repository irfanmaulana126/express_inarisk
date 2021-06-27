'use strict';

const dbConn = require('../../config/db.config');

const getNotif = (req ,res) =>{
    dbConn.query("Select * from tbl_notif",(err,results)=>{
        if (err) {
            console.log(err);
            res(err, null);
        } else {
            res(null, results);
        }
    })
}
const postNotif = (req ,res) =>{
    dbConn.query("INSERT INTO tbl_notif set ?",[req],(err,results)=>{
        if(err){
            console.log(err);
            res(err,null);
        }else{
            res(null,results)
        }
    })
}
module.exports={getNotif,postNotif}