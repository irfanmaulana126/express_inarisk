const {postNotif,getNotif}= require('../models/notifModel')
const request = require('request');

const postNotifications = (req,res)=> {
    var options = {
    'method': 'POST',
    'url': 'https://onesignal.com/api/v1/notifications',
    'headers': {
        'Authorization': 'Basic ZTFjYzAxY2ItZjA0Yy00NzlhLThmODgtNjU2OWIxMWRkYTA3',
        'Content-Type': 'application/json; charset=utf-8'
    },
    'body': '{"app_id":"b24b32f4-3bc4-4d4f-ace7-aea7ecb112a6","contents":{"en":"'+req.body.body+'"},"headings":{"en":"'+req.body.title+'"},"included_segments":["All"]}'
    };
    request(options, function (error, response) {
    if (error) throw new Error(error);
        const data = {
            "title": req.body.title,
            "body": req.body.body
        };
        postNotif(data,(err,results)=>{
            if (err) {
                res.send(err);
            } else {                
                res.json(results);
            }
        });
    });
}
const getNotification = (req,res)=>{
    getNotif(req.params,(err,results)=>{        
        if (err) {
            res.send(err);
        } else {
            res.json(results)
        }
    });
}

module.exports={postNotifications,getNotification}