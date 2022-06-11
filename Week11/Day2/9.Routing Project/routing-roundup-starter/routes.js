const express = require('express');
const routes = express.Router();

routes.get('/bio', (req, res) => {
    res.send('Bio');
});

routes.get('/contact', (req, res) => {
    res.send('Contact');
});


module.exports = routes;