const express = require('express');
const app = express();

const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const productsRouters = require('./api/routes/products');
const ordersRouters = require('./api/routes/orders');

//mongo db connection
mongoose.connect('mongodb://127.0.0.1/testdb');

//enable morgan logs for dev environment
app.use(morgan('dev'));

//parsing urlencoded and json objects
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//routs to handle requests
app.use('/products', productsRouters);
app.use('/orders', ordersRouters);

app.use((req, res, next) => {
    res.status(200).json({
        message: "Hi Welcome to node js rest api services"
    });
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");

    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
        return res.status(200).json({});
    }
    next();
});

//error handling
app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500).json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;