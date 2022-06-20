const express = require('express');
const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
    res.send('index', {title: 'Home'});
});

//middleware fc
app.use((req, res, next) => {
    console.log('I\'m middleware function');
    next();
});





app.get('/throw-err', (req, res) => {
  throw new Error('Error throwing: An error has occurred!')
});


//middleware function to catch unhandeling requests and fwd to err handler
app.use((req, res, next ) => {
    const errorSpecific = new Error ('The requested page was not found!');
    errorSpecific.status = 404;
    next(errorSpecific);
})

//error handler for looging the error 
app.use((err, req, res, next) => {
    if (process.env.NODE_ENV === 'production') {
        //Log err in DB
    } else {
        console.log(err);
    }
    next(err);
})

//err handlers for 404 errors
app.use((err, req, res, next) => {
    if (err.sttsus = 404) {
        res.status = 404;
        res.render('page-not-found', {title: 'Page not found'});
    } else {
        next(newError);
    }
 
})

//error handler function
app.use((err, req, res, next) => {
    console.log('I\'m error handler function');

    res.status = err.status || 500;
    const isProduction = process.env.NODE_ENV === 'production';
   
    //NOTE: dc se ruleaza in terminal NODE_ENV='production' node app.js atunci nu se afiseaza err. Doar dc nu e production(better not to leak info in production)
    res.render('error', {
        title: 'Server Error',
        message: isProduction ? null : err.message,
        error:  isProduction ? null : err
    })

    next();
});

const port = 8080;
app.listen(port, () => {console.log(`Sever is listening on port ${port}...`)})