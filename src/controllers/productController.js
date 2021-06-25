const {getProduct,getProductById,insertProduct,updateProductById,deleteProductById} = require('../models/productModel')

const showProduct = (req,res)=> {
    getProduct((err,results)=>{
        if (err) {
            res.send(err);
        } else {
            res.json(results)
        }
    });
}

const showProductById = (req,res)=>{
    getProductById(req.params.id,(err,results)=>{
        if (err) {
            res.send(err)
        } else {
            res.json(results)
        }
    });
}

// Create New Product
const createProduct = (req, res) => {
    const data = {
        "product_name": req.body.product_name,
        "product_kode": req.body.product_kode,
        "product_price": req.body.product_price,
        "product_is_ready": req.body.product_is_ready,
        "product_picture":req.file.filename
    };
    insertProduct(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Update Product
const updateProduct = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateProductById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
 
// Delete Product
const deleteProduct = (req, res) => {
    const id = req.params.id;
    deleteProductById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}
module.exports={showProduct,showProductById,createProduct,updateProduct,deleteProduct}