const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Node.js (App 2)');
});

app.listen(5001, () => {
    console.log('Node.js App running on port 5001');
});