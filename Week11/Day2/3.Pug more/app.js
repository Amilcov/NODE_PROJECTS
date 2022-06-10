const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    //res.send('hi');
    console.log(`Request method is: ${req.method}`);
    console.log(`Request path is: ${req.path}`);
    const dataPage = {
        title: 'Welcome', 
        heading: 'Home',
        elemX: 'Apple',
        elemY: 'Watermellon',
        elemZ: 'Mure'
    };
    res.render('layout', dataPage);
})

const port = 8081;
app.listen(port, () => {
    console.log(`Server: I m listening requets on port ${port}`);
})