var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
    picture: { type: String },
    createdAT: { type: Number, default: Date.now() },
    isRequest: { type: Boolean, default: false },
    isfriend: { type: Boolean, default: false },
    _id: { type: String, required: true },
    reqSenderId: { type: String },

}, { minimize: false });

exports.UserModel = mongoose.model('Users', UserSchema);