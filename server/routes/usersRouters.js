const express = require('express');
const router = express.Router();
const ExpressError = require('../../utils/ExpressError');
const {userSchemaValidation} = require("../../schemas");
const {userView,userForm,addUser,deleteUser,viewUser,editUser,editUserForm } = require('../controller/userController');


const userValidate = (req, res, next) => {
    const {error} = userSchemaValidation.validate(req.body)
    if(error){
       const msg = error.details.map(el=> el.message).join(',');
       throw new ExpressError(msg,400);
    }else{
      next();
    }
}


router.get('/users',userView)
router.get('/users/form',userForm)
router.post('/users',userValidate,addUser)   
router.get('/users/:id',viewUser)   
router.get('/users/:id/edit',editUserForm)
router.patch('/users/:id',userValidate,editUser)
router.delete('/users/:id',deleteUser)   
 







module.exports = router