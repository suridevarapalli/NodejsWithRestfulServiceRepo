const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /orders'
    });
});


router.post('/', (req, res, next) => {
    const orderid = {
        id: req.body.id,
    };
    res.status(201).json({
        message: 'Handling POST requests to /orders',
        createdOrder: orderid
    });
});

router.get('/:orderId', (req, res, next) => {
    const orderId = req.params.orderId;
    if(orderId < 0){
        res.status(400).json({
            message: 'Order Id should be a positive Integer',
            id: orderId 
        });
    }else{
        res.status(200).json({
            message: 'Successfully retrieved Order Record',
            id: orderId
        });
    }
});

router.delete('/:orderId', (req, res, next) => {
    res.status(200).json({
        message: 'Product Record has been deleted'
    });
});


module.exports = router;