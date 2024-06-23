const express = require('express');
const bodyParser = require('body-parser');
const orders = require('./routes/orders');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/submit_order', orders);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
