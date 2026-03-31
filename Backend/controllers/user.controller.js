const userModel = require('../models/user.model');
const userServices = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model');

module.exports.registerUser = async (req, res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    } 
    
    const  {fullname,email,password} = req.body;

    const isUserAlreadyExist = await userModel.findOne({ email });

    if (isUserAlreadyExist) {
        return res.status(400).json({ message: 'User already exist' });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userServices.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });
    // res.status(201).json({ message: 'User registered successfully', user });


    const token = user.generateAuthToken();
    res.status(201).json({ message: 'User registered successfully', token,user });
}

module.exports.loginUser = async (req, res,next)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select('+password');
    if (!user) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = user.generateAuthToken();

    res.cookie('token', token);

    res.status(200).json({ message: 'Login successful', token,user });
}

module.exports.getUserProfile = async (req, res,next)=>{
   res.status(200).json({user: req.user });
}

module.exports.logoutUser = async (req, res,next)=>{
    const token = req.headers.authorization?.split(' ')[1] || req.cookies.token;
    await blackListTokenModel.create({ token });
    // res.clearCookie('token');
    res.status(200).json({ message: 'Logout successful' });
}

