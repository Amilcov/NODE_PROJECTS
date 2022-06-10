const express = require('express');
const app = express();

app.get('/', (req, res) => {
   res.send('Hello from express');
})

const port = 8081;
app.listen(port, () => console.log(`Listening on port ${port}...`))