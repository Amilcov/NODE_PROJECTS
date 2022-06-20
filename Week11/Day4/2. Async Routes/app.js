const express = require('express');
const app = express();

//@param {number} timeToWait;
//const timeToWait = 5000;

const delay = (timeToWait) => new Promise((resolve, reject) => {
    setTimeout(() => {
            if (timeToWait > 0) {
               resolve(`This promise was resolve and was waiting ${timeToWait} ms!`);
            } else {
               reject(new Error('An error has occured!'));
            }
    },  Math.abs(timeToWait)
  )
})

const handlerAsync = (handler) => {
    return ((req, res, next) => {
        return handler(req, res, next).catch(next);
    })
}

//const handlerAsync = (handler) => (req, res, next) => handler(req, res, next).carch(next);

app.get('/promiseNoHandler', (req, res) => {
     delay(2000)
     .then(value => res.send(value));

   //res.send('Hello from  proimises')
});

app.get('/promiseWithHandler', (req, res, next) => {
     delay(-2000)
     .then(value => res.send(value))
     .catch(err=> next(err));

     //or .catch(next);
   //res.send('Hello from  proimises')
})

app.get('/asyncNoHandler', async (req, res) => {
     const result = await delay(1000);
     res.send(result);

})

app.get('/asyncWithHandler', async (req, res, next) => {
    try{
     const result = await delay(-1000);
     res.send(result);
    } catch(err) {
       next(err);
    }

})



app.get('/asyncWithWrapper', handlerAsync(async (req, res) => {
    const result = await delay(-1000);
    res.send(result);
} ))
const port = 8081;
app.listen(port, () => console.log(`Server is listening on port ${port}...`));