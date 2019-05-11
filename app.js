const express = require('express');
const app = express();
//something just for terminal feedback, doesn't matter
const morgan = require('morgan');
//something for CORS, probably not needed
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const itemRoutes = require('./routes/items');
const userRoutes = require('./routes/users');
//const searchItemRoutes = require('./routes/searchItems');
const userSignupRoutes = require('./routes/userSignup');

const cors = require('cors');
// for file uploading
const multer = require('multer');

// connecting to mongoDB
mongoose.connect('mongodb+srv://jungew:' + process.env.MONGO_ATLAS_PW + '@cluster0-fvmyf.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true
});

// stuff
app.use(cors());
app.use(morgan('dev'));
// make the 'images' folder public
app.use('/images', express.static('images'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//app.use('/searchItems', searchItemRoutes);
app.use('/users', userRoutes);
app.use('/items', itemRoutes);
app.use('/userSignup', userSignupRoutes);

app.get('/', (req, res, next) => {
  res.send("Team Souper Noodles Lab");
});

//error handling
app.use((req, res, next) => {
  const error = new Error('Route not found');
  error.status = 404;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;