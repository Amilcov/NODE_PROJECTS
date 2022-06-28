const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const routes = require('./routes');

const app = express();

app.set('view engine', 'pug');
app.use(morgan('dev'));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.use(routes);

module.exports = app