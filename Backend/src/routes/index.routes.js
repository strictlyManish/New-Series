const express = require('express');
const routes = express.Router();
const {RegisterController,LoginController} = require('../controllers/auth.controller');



routes.post('/register',RegisterController)
routes.post('/login',LoginController)



module.exports = routes;