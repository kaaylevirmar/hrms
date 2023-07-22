const mongoose =require('mongoose');
const User = require('../../models/user');

mongoose.connect('mongodb://127.0.0.1:27017/hrms')
.then(()=>{
    console.log('Connection Open.');
})
.catch((err)=>{
    console.log(`Error: ${err}`);
})



exports.userView = async (req,res)=>{
  const  users = await User.find({});
  res.status(200).render('user/show',{users})
}

exports.userForm = async (req,res)=>{
    res.render('user/addUserForm');
  }


exports.addUser = async (req,res)=>{
    const newUser = new User(req.body.user)
    await newUser.save()
  
    res.redirect('/users');
 
}

exports.viewUser = async(req,res)=>{
    const id = req.params.id;
    const user = await User.findById(id);
    res.status(200).render('user/viewUser',{user});
}

exports.editUserForm = async (req,res)=>{
    const userId = req.params.id;
    const user = await User.findById(userId);
    res.status(200).render('user/edit',{user});
}


exports.editUser = async (req,res)=>{
  const userId = req.params.id;
  const user = await User.findByIdAndUpdate(userId,{...req.body.user});
  res.redirect(`/users/${userId}`);
}


exports.deleteUser = async(req,res) =>{
  const {id} = req.params;
  await User.findByIdAndDelete(id);
  res.redirect('/users');
}


