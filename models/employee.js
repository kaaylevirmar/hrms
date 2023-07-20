const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const employeesSchema = new Schema({

    firstName: String,
    lastName: String,   
    age: Number,
    street: String,
    barangay: String,
    city: String,
    province: String,
    postalCode: Number, 
    phoneNumber: Number,
    phoneNumber2: Number,
    emergContactPer: String,
    contactNumber: Number,
    employeeId: String,
    email: String,
    office: String,
    position: String,
    sssId: String,
    gsisId: String,
    philHealthId: String,
    pagibigId: String,
    tinId: String,
    designation: String,
    dateStart: String,
    createdAt: {
        type: Date,
        default: Date.now(),
    }
    
  
   
})

module.exports = mongoose.model('Employee', employeesSchema);