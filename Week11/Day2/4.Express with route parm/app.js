const express = require('express');
const app = express();

app.get('/product/:id(\\d+)', (req, res) => {
  res.send(`Product ID: ${req.params.id}`);
});

app.get([/^\/(our-)?produ?ct{1,2}s?\/?$/i, '/productos'], (req, res) => {
 // If the current request path doesn't match our preferred
 // route path then redirect the client.
 if (!req.path.toLowerCase().startsWith('/products')) {
   res.redirect('/products');
 }

 res.send('Products');
});

const port = 8081;
app.listen(port, ()=> console.log(`Server: I m listenting to requets on port ${port}`));