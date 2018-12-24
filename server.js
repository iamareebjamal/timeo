const express = require('express');
const func = require('./index');

const app = express();
const port = 3000;

app.get('/', func);

app.listen(port, () => console.log(`App listening on port ${port}!`));