var express = require("express");
var api = express.Router();
var friendsSchema = require("../Schemas/friends-schema");
var FriendsModel = friendsSchema.FriendsModel;



api.post("/friends" , function(req , res){
     res.send("friends route")
})



module.exports = api;


