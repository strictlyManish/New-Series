const express = require('express');
const app = express();
const routes = require('./routes/index.routes');
const cookie_parser = require('cookie-parser');


app.use(cookie_parser());
app.use(express.json());
app.use('/api',routes)


module.exports = app;