const express = require('express');
const app = express();

const runOnEveryRoute = (req, res, next) => {
    console.log('I m middleware functiomn that run on every route')
}

const logTime = (req, res, next) =>{
    console.log('Date:',new Date().toISOString());
    req.A1 ='A1';
    res.A2 ='A2'
    next();
}

const passOnMessage = (req, res, next) => {
    console.log('Passing on a message');
    req.messagePassed = 'Hi from function passOnMessage';
    console.log('Req.A1:', req.A1);
    console.log('Res.A2:', res.A2);
    req.B1 ='B1';
    res.B2 ='B2';
    next();
}

const passOnMessageLast = (req, res, next) => {
    console.log('Passing on a message Last');
    req.messagePassed = 'Hi from function passOnMessage LAST';
    console.log('Req.A1:', req.A1);
    console.log('Req.B1:', req.B1);
    console.log('Res.A2:', res.A2);
    console.log('Res.B2:', res.B2);
    req.C1 ='C1';
    res.C2 ='C2';
    next();
}

app.get('/', logTime, passOnMessage, passOnMessageLast, (req, res) => {
    console.log('The value that was passed:', req.messagePassed);
    console.log('Req.A1:', req.A1);
    console.log('Req.B1:', req.B1);
    console.log('Req.C1:', req.C1);
    console.log('Res.A2:', res.A2);
    console.log('Res.B2:', res.B2);
    console.log('Res.C2:', res.C2);
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