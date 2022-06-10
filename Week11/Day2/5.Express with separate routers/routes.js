const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.send('Home');
});


router.get('/products', (req, res) => {
    res.send('Products');
});

router.get('/orders', (req, res) => {
    res.send('Orders');
});

module.exports = router;