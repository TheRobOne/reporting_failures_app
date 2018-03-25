const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

//connect to MongoDB
mongoose.connect('mongodb://localhost/reporting_failures_app');
const db = mongoose.connection;

//body parser middleware
app.use(bodyParser.json());

//route files
let buildings = require('./routes/building');
app.use('/building', buildings);

app.listen(3000, () => {
    console.log('====================================');
    console.log('Server is running!');
    console.log('====================================');
});