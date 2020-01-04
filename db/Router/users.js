var express = require("express");
var api = express.Router();
var userSchema = require("../Schemas/user-schema");
var UserModel = userSchema.UserModel;


api.post("/users" , function(req , res){
    // res.send(req.body);
    var users = new UserModel(req.body);
    users.save(function(error , data){
        console.log(error)
         res.send(data);
    })
})
api.get("/findAllUsers" , function(req , res){
    UserModel.find().exec((error , data)=>{
        res.send(data)
    })
})




api.get("/users" , function(req , res){
    res.send("This is users route.");
})
    
module.exports = api;
