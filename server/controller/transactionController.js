const mongoose =require('mongoose');
const Transaction = require('../../models/transaction')

exports.transactionViews = async (req,res)=>{
    const transactions = await Transaction.find({});

    res.render('pages/transactions',{transactions})
}