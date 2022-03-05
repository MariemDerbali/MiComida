const mongoose = require("mongoose");

var mongoURL = 'mongodb+srv://mariem:7j1lgnAtWcm9uTVm@cluster0.y7yrs.mongodb.net/MiComida'

mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })

var db = mongoose.connection

db.on('connected', () => {
    console.log('mongodb connection successfull');
})

db.on('error', () => {
    console.log('mongodb connection failed');

})

module.exports = mongoose