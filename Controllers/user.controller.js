const userModel = require("../Models/user.model");
const express = require('express');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const otpGenerator = require('otp-generator');
const bodyParser = require('body-parser');

exports.userregister=async(req,res)=>{
    const { name, police_id, phone, password, cpassword, designation } = req.body;
    const existingUser = await userModel.findOne({ phone });
    if (existingUser) {
      return res.status(400).json({ message: 'User with this phone number already exists' });
    }
    
    if(password!=cpassword){
        return res.status(400).json({ message: 'INVALID CONFIRRM PASSWORD' });
    }

    const otp=Math.floor(1000 + Math.random() * 9000)
  

    const user = new userModel({ name, police_id, phone, password, cpassword, designation, otp: { code: otp, expiresAt: new Date(Date.now() + 60 * 1000) } });
    await user.save();
  

    console.log(`OTP for ${name}: ${otp}`);
  
    res.json({ message: 'OTP sent to your phone number',OTP:otp });
}

exports.userregisterotpverification=async(req,res)=>{
    const { phone, otp } = req.body;

   
    const user = await userModel.findOne({ phone });
  
    if (!user) {
      return res.status(401).json({ message: 'User not found' });
    }
  
    if (user.otp.code !== otp) {
      return res.status(401).json({ message: 'Invalid OTP' });
    }

    if (user.otp.expiresAt < new Date()) {
      return res.status(401).json({ message: 'OTP has expired' });
    }

   const token = jwt.sign({ phone }, process.env.SECRET_KEY);
    await userModel.updateOne({
        phone
    },{
        token:token
    })
    res.json({ token });
}