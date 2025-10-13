const userModel = require('../models/userModel');
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');

async function RegisterController(req, res) {
    try {
        const { username, password, email } = req.body;
        const existUser = await userModel.findOne({ username });

        if (existUser) {
            return res.status(409).json({
                message: 'user already exists'
            })
        }
        const hashedPass = await bcrypt.hash(password, 10)
        const user = await userModel.create({ username, password: hashedPass, email });

        const token = jwt.sign({ id: user._id }, process.env.JWT_KEY)

        res.cookie('token', token)

        res.status(201).json({
            message: 'User created successfully',
            user
        });
    } catch (error) {
        res.status(400).json({
            message: 'Error creating user',
            error: error.message
        });
    }
}


async function LoginController(req, res) {
    res.send('login')

};


module.exports = { RegisterController, LoginController };