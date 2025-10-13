const userModel = require('../models/userModel');


async function getprofileData(req,res) {
    const user = req.user;
    res.status(200).json({
        user
    })
};


module.exports = { getprofileData };