const express = require("express");
const app =  express();
const path = require('path');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');


//user Routers

app.engine('ejs', ejsMate);

const usersRouters = require('./server/routes/usersRouters');
const employeesRouters = require('./server/routes/employeesRouter');

app.set('views', path.join(__dirname,'./client/views'));
app.set('view engine', 'ejs');

// Parse form data
app.use(express.urlencoded({extended:true}))

//Configure Method override
app.use(methodOverride('_method'));




app.use('',usersRouters)
app.use('',employeesRouters)


app.use('*',(req,res,next)=>{
    next('Page Not Found!',404);
})


app.listen(5000,()=>{
    console.log("Server running in port 5000");
})