const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const UsersSchema = new Schema({

    name: String,
    password: String,
    email: String
  
   
})

module.exports = mongoose.model('User', UsersSchema);