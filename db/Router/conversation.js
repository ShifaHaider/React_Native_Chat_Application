var express = require("express");
var api = express.Router();
var messageSchema = require("../Schemas/message-schema");
var MessagesModel = messageSchema.messageSchema;


api.post("/messages" , function(req , res){
    console.log(req.body);
    res.send(req.body);
    // var messages = new MessagesModel(req.body);
    // messages.save(function(error , data){
    //     console.log(error)
    //      res.send(data);
    // })
})
api.get("/messages" , function(req , res){
   res.send("Messages")
})

api.get("/users" , function(req , res){
    res.send("This is users route.");
})
    
module.exports = api;
