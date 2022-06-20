const express = require('express');
const app = express();

require('dotenv').config();
app.get('/', (req, res) => {
    res.send('Hello world!');
})
const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log(`Server is listening on port ${port}...`));
