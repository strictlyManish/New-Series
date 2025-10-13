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

        res.cookie('token', token,{
            httpOnly: true,
        })

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
    try {
        const { username, password } = req.body;

        const userCheck = await userModel.findOne({ username });

        if (!userCheck) {
            return res.status(404).json({ message: 'User not found' });
        }

        const passMatch = await bcrypt.compare(password, userCheck.password);
        if (!passMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: userCheck._id }, process.env.JWT_KEY);
        res.cookie('token', token,{
            httpOnly: true,
        });

        res.status(200).json({
            message: 'user Logged in ',
            username
        })

    } catch (error) {
        res.status(400).json({
            message: 'Error login user',
            error: error.message
        });
    }

};

module.exports = { RegisterController, LoginController };