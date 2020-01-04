var mongoose = require("mongoose");

var uri = "mongodb+srv://react-native-chat:react-native-chat@cluster0-b9k8y.mongodb.net/test?retryWrites=true&w=majority";

// mongoose.connect(uri , {useNewUrlParser: true});
mongoose.connect(uri, {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })


var db = mongoose.connection;


db.on('error' , function (error) {
    console.log(error);
});

db.on('open' , function () {
    console.log('Open');
});