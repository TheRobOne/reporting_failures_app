const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.listen(3000, () => {
    console.log('====================================');
    console.log('Server is running!');
    console.log('====================================');
});