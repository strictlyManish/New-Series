const express = require('express');
const { getprofileData } = require('../controllers/getuser.controller');
const authMiddleware = require("../middlewares/auth.moddleware");



const userRoutes = express.Router();


userRoutes.get("/profile",authMiddleware,getprofileData);

module.exports = userRoutes;