const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

const app = express();

// DB Config
const db = require('./config/keys').mongoURI;

//connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//body parser middleware
app.use(bodyParser.json());

//cors middleware
app.use(cors());

//route files
let buildings = require('./routes/building');
app.use('/buildings', buildings);
let rooms = require('./routes/room');
app.use('/rooms', rooms);
let failures = require('./routes/failure');
app.use('/failures', failures);
let users = require('./routes/user');
app.use('/users', users);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('====================================');
    console.log(`Server is running on port ${port}`);
    console.log('====================================');
});