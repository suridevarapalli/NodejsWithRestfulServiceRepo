const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handling GET requests to /Products'
    });
});

router.post('/', (req, res, next) => {
    const product = {
        name: req.body.name,
    };
    res.status(201).json({
        message: 'Handling POST requests to /products',
        createdEmplyee: emp
    });
});

router.get('/:productId', (req, res, next) => {
    const productId = req.params.productId;
    if(productId < 0){
        res.status(400).json({
            message: 'Product Id should be a positive Integer',
            id: productId 
        });
    }else{
        res.status(200).json({
            message: 'Successfully retrieved Product Record',
            id: productId
        });
    }
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Product Record has been deleted'
    });
});

module.exports = router;