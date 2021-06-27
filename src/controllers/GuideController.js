const {getGuide}= require('../models/guideModel')

const showGuide = (req,res)=> {
    
    if(req.params.id === undefined){
        res.status(201).json({error: "harus menyertakan param risk "});
    }else{
        getGuide(req.params,(err,results)=>{
            if (err) {
                res.send(err);
            } else {
                let type = '';
                let description = '';
                results.forEach((val,key) => {
                    type = val.type;
                    description += val.order+'. '+val.description+'. ';
                });
                resEnd = {'type':type, 'description':description};
                res.json([resEnd])
            }
        });
    }
}


module.exports={showGuide}