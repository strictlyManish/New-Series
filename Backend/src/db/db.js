const mongoose = require('mongoose');


const conectDB = () =>{
    try {
        mongoose.connect(process.env.MONGODB_URI);
        console.log('Database concted sucessfully')
    } catch (error) {
        console.log('Conection error in database')
    }
};


module.exports = conectDB;