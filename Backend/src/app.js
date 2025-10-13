const express = require('express');
const cors = require('cors');
const cookie_parser = require('cookie-parser');
const routes = require('./routes/index.routes');

const app = express();

app.use(cookie_parser());
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));


app.use('/api', routes);

module.exports = app;