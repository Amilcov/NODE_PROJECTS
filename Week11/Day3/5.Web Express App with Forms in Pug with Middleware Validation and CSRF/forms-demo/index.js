const express = require('express');
const cookieParser = require('cookie-parser');
const csrf = require('csurf');

const app = express();

app.set('view engine', 'pug');
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
const csrfProtection = csrf({cookie: true});

const guests = [];


app.get('/', (req, res) => {
    res.render('index', {title: "Guests list", guests});
})

app.get('/guest-form', csrfProtection, (req, res) => {
    res.render('guest-form', {
        title: "Guest Form", 
        errors: [],
        fullName: '',
        email: '',
        numGuests: '',
        csrfToken: req.csrfToken()
    });
   
})

const validateGuest = (req, res, next) => {
    const errors = [];
    const {fullName, email, numGuests} = req.body;
    const numGuestsNumber = parseInt(numGuests);

  
    if (!fullName) {
        errors.push('Name of the guest must be fill in');
    }
     
    if (!email) {
        errors.push('Email of the guest must be fill in');
    }

    if (!numGuestsNumber || numGuestsNumber < 1) {
        errors.push('Number of guests must be fill in');
    }

    req.body.errors = errors; 
    next();
    
}

app.use(validateGuest);
app.post('/guest', csrfProtection, (req, res) => {
    const {fullName, email, numGuests, errors} = req.body;
    if (errors.length > 0) {
        res.render('guest-form', {
            title: "Guest Form", 
            errors,
            fullName,
            email,
            numGuests,
            csrfToken: req.csrfToken()
        });
        return;
   }
    const guest = { fullName, email, numGuests};
    guests.push(guest);
    res.redirect('/');
    
})

const port = 8081;
app.listen(port, () => console.log(`Server listening on port ${port}...`));