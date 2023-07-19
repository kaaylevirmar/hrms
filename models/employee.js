const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const employeesSchema = new Schema({

    firstName: String,
    lastName: String,
    age: Number,
    address: String,
    email: String,
    office: String,
    position: String,
    sssId: String,
    gsisId: String,
    philHealthId: String,
    pagibigId: String,
    tinId: String,
    designation: String,
    joiningDate: {
        type: Date,
        default: Date.now(),
    }
    
  
   
})

module.exports = mongoose.model('Employee', employeesSchema);