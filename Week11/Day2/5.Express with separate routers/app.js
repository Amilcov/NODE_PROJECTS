const express = require('express');
const routes = require('./routes')

const app = express();

app.use('/marketing-view', routes);
app.use('/development-view', routes);
app.use(routes);

const port = 8081;
app.listen(port, () => console.log(`Server: listenting on port ${port}`));