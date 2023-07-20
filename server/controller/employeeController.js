const mongoose =require('mongoose');
const offices = require('../../seeds/offices');
const positions = require('../../seeds/position');
const designations = require('../../seeds/designation');
const Employee = require('../../models/employee');




mongoose.connect('mongodb://127.0.0.1:27017/hrms')
.then(()=>{
    console.log('Connection Open.');
})
.catch((err)=>{
    console.log(`Error: ${err}`);
})



exports.viewEmployees = async (req,res) => {
    const employees = await Employee.find({})
    res.render('employee/show',{employees});
}


exports.employeesForm = (req,res)=>{
    res.render('employee/employeeForm',{offices,positions,designations});
}

exports.addEmployee = async (req,res)=>{
    const employee = req.body.employee;
    const newEmployee = new Employee(employee);
    await newEmployee.save();
    res.redirect('/employees');
}

exports.viewEmployee= async (req,res)=>{
    const id = req.params.id;
    const employee = await Employee.findById(id)
    res.render('employee/viewEmployee',{employee})
}

exports.updateEmployeeForm = async (req,res)=>{
    const id = req.params.id;
    const employee = await Employee.findById(id);
    res.render('employee/edit',{employee,offices,positions,designations});
}

exports.updateEmployee = async(req,res) => {
    const id = req.params.id;
    const employee = await Employee.findByIdAndUpdate(id,{...req.body.employee});
    res.redirect('/employees')
}

exports.deleteEmployee = async (req,res) => {
    const id = req.params.id;
    await Employee.findByIdAndDelete(id);
    
    res.redirect('/employees')
}
