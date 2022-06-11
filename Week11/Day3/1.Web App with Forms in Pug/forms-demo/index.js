const express = require('express');
const app = express();

app.set('view engine', 'pug');
//app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded());

const guests = [];
 const guest1 = {
        fullName: 'adri',
        email: 'mail',
        numGuests: 2
    };
guests.push(guest1);
app.get('/', (req, res) => {
    res.render('index', {title: "Guests list", guests});
})

app.get('/guest', (req, res) => {
    res.render('guest-form', {title: "Guest Form"})
})

app.post('/guest', (req, res) => {
    console.log('HRE');
    const guest = {
        fullName: req.body.fullName,
        email: req.body.email,
        numGuests: req.body.numGuests
    };
    guests.push(guest);
    console.log(guests);
    res.redirect('/');
})
const port = 8081;
app.listen(port, () => console.log(`Server listening on port ${port}...`));