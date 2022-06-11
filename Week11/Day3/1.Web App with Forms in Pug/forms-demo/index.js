const express = require('express');
const app = express();

app.set('view engine', 'pug');
//app.use(express.urlencoded({ extended: true }));
app.use(express.urlencoded());

const guests = [];
app.get('/', (req, res) => {
    res.render('index', {title: "Guests list", guests});
})

app.get('/guest', (req, res) => {
    res.render('guest-form', {title: "Guest Form"})
})

app.post('/guest', (req, res) => {
    const guest = {
        fullName: req.body.fullName,
        email: req.body.email,
        numGuests: req.body.numGuests
    };
    guests.push(guest);
    res.redirect('/');
})
const port = 8081;
app.listen(port, () => console.log(`Server listening on port ${port}...`));
