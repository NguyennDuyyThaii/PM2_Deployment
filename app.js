const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello, world! kk');
})

app.get('/hi', (req, res) => {
    res.send('hi');
})

app.listen(3000, () => {
    console.log('server listening on port 3000')
})