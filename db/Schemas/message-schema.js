var mongoose = require("mongoose");


var MessageSchema = new mongoose.Schema({
    text: {type: String , required: true},
    roomID: {type: String , required: true},
    senderID: {type: String , required: true},
    createdAT: {type: Number , default: Date.now()},
}, {minimize: false});

exports.MessageSchema = mongoose.model('Messages' , MessageSchema);