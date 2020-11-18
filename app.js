const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('I\'m trying to remember when but it makes me dizzy'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
