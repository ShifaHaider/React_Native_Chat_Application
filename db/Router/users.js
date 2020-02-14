var express = require("express");
var api = express.Router();
var userSchema = require("../Schemas/user-schema");
var UserModel = userSchema.UserModel;


api.post("/users" , function(req , res){
    var users = new UserModel(req.body);
    users.save(function(error , data){
         res.send(data || error);
    })
})
api.get("/findAllUsers" , function(req , res){
    UserModel.find().exec((error , data)=>{
        console.log(error || data)
        res.send(data || error)
    })
})
api.get("/findOneUser" , function(req , res){
       console.log("dssfdfs")
         UserModel.findById(req.query.id).exec((error , data)=>{
             res.send(data || error);
             console.log(error)
         })
})

api.post("/updateUserProfile" , function(req , res){
    console.log(req.body);
    UserModel.update({_id: req.body.updatedData._id}, (req.body.updatedData), function (error, data) {
        res.send(data || error);
    })
})

api.get("/users" , function(req , res){
    res.send("This is users route.");
})
    
module.exports = api;
