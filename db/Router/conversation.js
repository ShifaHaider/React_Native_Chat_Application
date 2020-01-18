var express = require("express");
var api = express.Router();
var messageSchema = require("../Schemas/message-schema");
var MessagesModel = messageSchema.MessageSchema;


api.post("/messages" , function(req , res){
    console.log(req.body);
    var messages = new MessagesModel(req.body);
    messages.save(function(error , data){
        console.log(error)
         res.send(data);
    })
})
api.get("/messages" , function(req , res){
   res.send("Messages")
})


    
module.exports = api;
