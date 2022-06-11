const express = require('express');
const routes = require('./routes');
const app = express();


app.set('view engine', 'pug');



app.get('/', (req, res) => {
    res.send('Hello from Express!');
});

app.get(/(\w)*(xyz)$/, (req, res) => {
    res.send('That\'s all I wrote.');
});

//about
//about2
//about-foo
//about_foo
//foo
//NOT : /about/foo
app.all([/^\/(about(\d|-foo|_foo|)?)$/i, '/foo/'], (req, res) => {
    const dataPage = {
        method: req.method,
        path: req.path,
        randomNumber: parseInt(Math.random() * 1000)
    };
    res.render('index', dataPage);
});




app.get(/^(\/capital-letters)/,(req, res)=>{
    const display = req.path.substring('/capital-letters/'.length).toUpperCase();
    res.send(display);

});


app.use('/margot',routes);
app.use('/margeaux',routes);



const port = 8081;
app.listen(port, () => console.log(`Server listening on port ${port}...`))