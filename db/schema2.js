var mongoose = require("mongoose");


var MessageSchema = new mongoose.Schema({
    text: {type: String , required: true},
    roomID: {type: String , required: true},
    senderID: {type: String , required: true},
    // days: {type: Array , required: true},
    // fee: {type: Number , required: true},
    // subject: {type: String , required: true},
    // startTime: {type: String , required: true},
    // endTime: {type: String , required: true},
    createdAT: {type: Number , default: Date.now()},
    // userID: {type: String , required: true},
    // studentsID: {type: Array , default: []},
}, {minimize: false});

exports.MessageSchema = mongoose.model('Messages' , MessageSchema);