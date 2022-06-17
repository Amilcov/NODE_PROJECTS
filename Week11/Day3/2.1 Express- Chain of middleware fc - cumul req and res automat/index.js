const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));

const guests = [];

app.get('/', (req, res) => {
    res.render('index', {title: "Guests list", guests});
})

app.get('/guest', (req, res) => {
    res.render('guest-form', {
        title: "Guest Form", 
        errors: [],
        fullName: '',
        email: '',
        numGuests: ''
    });
})


app.post('/guest', (req, res) => {
    const errors = [];
    const {fullName, email, numGuests} = req.body;

  
    if (!fullName) {
        errors.push('Name of the guest must be fill in');
    }
     
    if (!email) {
        errors.push('Email of the guest must be fill in');
    }

    if (!numGuests) {
        errors.push('Number of guests must be fill in');
    }
    
    if (errors.length > 0) {
        res.render('guest-form', {
            title: "Guest Formx", 
            errors,
            fullName,
            email,
            numGuests
        });
        return;
   }
    const guest = {fullName, email, numGuests};
    guests.push(guest);
    res.redirect('/');
    
})

const port = 8081;
app.listen(port, () => console.log(`Server listening on port ${port}...`));