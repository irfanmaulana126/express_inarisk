
const dbConn = require('../../config/db.config');
const {body, validationResult, check,checkSchema} = require('express-validator')
const multer = require('multer');
const uploadDir = '/img/';
const path = require('path');
const crypto = require('crypto');
const storage = multer.diskStorage({
    destination: "./public"+uploadDir,
    filename: function (req, file, cb) {
    //   crypto.pseudoRandomBytes(16, function (err, raw) {
    //     if (err) return cb(err)  
        cb(null, new Date().toDateString()+'_'+ path.extname(file.originalname))
    //   })
    },
})
const fileFilter = (req,file,cb)=>{
    if(file.mimetype  === 'image/png' || file.mimetype === 'image/jpg' || file.mimetype === 'image/jpeg'){
        cb(null, true);
    }else{
        cb(null,false);
    }
}
const upload = multer({storage: storage, dest: uploadDir,fileFilter:fileFilter});

module.exports = {
    productInfo:[
        upload.fields([{name:'product_picture',maxCount:1}]),
        body('product_price',"Harga produk hanya dapat diisi dengan angka").isNumeric().trim().escape(),
        body('product_is_ready',"produk yang siap hanya berisi benar atau tidak").isBoolean(),
        body('product_name')
        .isLength({min:3}).withMessage("nama produk minimal 3 karakter")
        .notEmpty().withMessage("nama produk tidak boleh kosong")
        .trim().escape()
        .custom(value =>{
            return new Promise((resolve, reject) => {
                dbConn.query('select product_name from product where product_name=?', [value], function (err, results, fields) {
                   if (err)
                      reject(err)
                   if (results.length>0)
                      reject(new Error('Nama produk sudah digunakan'))
                   resolve()
                })
             })   
        }),
        body('product_kode').notEmpty().withMessage("kode produk tidak boleh kosong").trim().escape().custom(value =>{
            return new Promise((resolve, reject) => {
                dbConn.query('select product_kode from product where product_kode=?', [value], function (err, results, fields) {
                   if (err)
                      reject(err)
                   if (results.length>0)
                      reject(new Error('Kode Produk sudah digunakan'))
                   resolve()
                })
            }) 
        })
    ],
    productID:[
        check("id", "Invalid product ID").trim().isInt()
    ],
    
    result:(req, res, next)=>{
        const err = validationResult(req);
        if (!err.isEmpty()) {
            return res.status(422).json({ errors: err.array() })
        }
        next();
    }
}