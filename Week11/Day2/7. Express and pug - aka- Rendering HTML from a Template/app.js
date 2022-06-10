const express = require('express');
const app = express();

app.set('view engine', 'pug')

app.get('/', (req, res) => {
    //res.send('Hello from node Express app with template engine');
    res.render('layout', {title: "Welcome", heading: "Home"})
})

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`))