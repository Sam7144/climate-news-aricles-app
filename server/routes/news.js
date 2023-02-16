const express=require('express');
const route=express.Router();
const {createUser}=require('../controllers/login');
route.post('/signin',createUser)
module.exports=route;