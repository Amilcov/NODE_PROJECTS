const express = require('express');
const app = express();

const runOnEveryRoute = (req, res, next) => {
    console.log('I m middleware functiomn that run on every route')
}

const logTime = (req, res, next) =>{
    console.log('Date:',new Date().toISOString());
    res.local ='A';
    next();
}

const passOnMessage = (req, res, next) => {
    console.log('Passing on a message');
    req.messagePassed = 'Hi from function passOnMessage';
    console.log('Res.local:', res.local);
    next();
}

app.get('/', logTime, passOnMessage, (req, res) => {
    console.log('The value that was passed:', req.messagePassed);
    res.send("Hello World!");
})

app.use(runOnEveryRoute);
app.get('/a', (req, res) => {
    res.send('I m route a');
})

app.get('/b', (req, res) => {
    res.send('I m route/b');
})

const port = 8081;
app.listen(port, () => console.log(`Server listening on port ${port}...`));