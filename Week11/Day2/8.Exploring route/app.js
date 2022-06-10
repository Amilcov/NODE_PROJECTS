const express = require('express');
const app = express();

app.set('view engine', 'pug');

//routes with param
/*
app.get('/product/:id', (req, res) => {

    const detailProducts = ['/product/1', '/product/2', 'product/x'];
    const pathProducts = ['/products', '/our-products', 'prodcts']
    const dataPage = {detailProducts, pathProducts};
   res.render('index', dataPage);
   return;
});
*/

//routes with pattern string
/*
app.get('/product/:id(\\d+)', (req, res) => {

    const detailProducts = ['/product/1', '/product/2', 'product/x'];
    const pathProducts = ['/products', '/our-products', 'prodcts']
    const dataPage = {detailProducts, pathProducts};
   res.render('index', dataPage);
   return;
});
*/


//routes with regular expression
app.get(/^\/(our-)?produ?ct{1,2}s?\/?/i, (req, res) => {
    if(! req.path.toLowerCase().startsWith('/product')) {
         res.redirect('/products');
          return;
    }


/*match path: 
   /products
   /product
   /prodcts
   /productts
   /our-products
*/
    const detailProducts = ['/product/1', '/product/2', 'product/x'];
    const pathProducts = ['/products', '/our-products', 'prodcts', '/products',  '/our-products'];
    const dataPage = {detailProducts, pathProducts};
    res.render('index', dataPage);
  
});

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`));