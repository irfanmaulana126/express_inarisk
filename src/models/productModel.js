'use strict';

const dbConn = require('../../config/db.config');

const getProduct = (res) =>{
    dbConn.query("Select * from product",(err,results)=>{
        if (err) {
            console.log(err);
            res(err, null);
        } else {
            res(null, results);
        }
    })
}

const getProductById = (req ,res)=>{
    dbConn.query("select * from product where product_id=?",[req],(err,results)=>{
        if (err) {
            console.log(err)
            res(err,null)
        } else {
            res(null,results)
        }
    })
}

const insertProduct = (req, res)=>{
    dbConn.query("INSERT INTO product set ?",[req],(err,results)=>{
        if(err){
            console.log(err);
            res(err,null);
        }else{
            res(null,results)
        }
    })
}

const updateProductById = (req,id,res)=>{
    dbConn.query("update product set product_name = ?, product_price = ?, product_kode = ?, product_is_ready = ?  where product_id = ?",
    [   req.product_name,
        req.product_price,
        req.product_kode,
        req.product_is_ready,
        id
    ],(err,results)=>{
        if (err) {
            console.log(err);
            res(err,null);
        } else {
            res(null,results)
        }
    })
}

const deleteProductById = (id,res)=>{
    dbConn.query("delete from product where product_id=?",[id],(err,results)=>{
        if (err) {
            console.log(err);
            res(err,null);
        } else {
            res(null,results)
        }
    })
}

module.exports={getProduct,getProductById,insertProduct,updateProductById,deleteProductById}