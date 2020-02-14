var mongoose = require("mongoose");
var FriendsSchema = new mongoose.Schema({
    isRequest: { type: Boolean, default: false },
    isfriend: { type: Boolean, default: false },
    reqSenderId: { type: String },
    reqReceiverId: { type: String },
    createdAT: { type: Number, default: Date.now() },
    _id: { type: String, required: true },

}, { minimize: false });

exports.FriendsModel = mongoose.model('Friends', FriendsSchema);