const express = require("express");
const cors = require('cors');
const path = require('path');
const debug = require("debug")("node-angular");

const productRoute = require('./routes/products');
const categoryRoute = require('./routes/categories');
//const userRoute = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/images', express.static(path.join('backend/images')))
app.use('/api/categories', categoryRoute);
app.use('/api/products', productRoute);
//app.use('/api/user', userRoute);

module.exports = app;
