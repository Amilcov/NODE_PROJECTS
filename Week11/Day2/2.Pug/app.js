const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.all('/', (req, res) => {
    const pugFortmat = 'Hello';
    console.log(`Reqeust method is: ${req.method}`);
    console.log(`Request path is: ${req.path}`);
    const pageData = {title: 'Welcome to pug', heading: 'Home page'}
    res.render('layout', pageData);
})

const port = 8081;
app.listen(port, () => {console.log(`Server : Im listening to requests on port ${port}`)})