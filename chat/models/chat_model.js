var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var chatSchema = mongoose.Schema({ //Defines the Schema for this database
    Name: String,
    Chat: String
});

mongoose.model('Chat', chatSchema);