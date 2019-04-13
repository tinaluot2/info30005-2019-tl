const express = require('express');
const app = express();
//something just for terminal feedback, doesn't matter
const morgan = require('morgan');
//something for CORS, probably not needed
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const itemRoutes = require('./routes/items');
const userRoutes = require('./routes/users');
const searchItemRoutes = require('./routes/searchItems');

// connecting to mongoDB
mongoose.connect('mongodb+srv://jungew:' + process.env.MONGO_ATLAS_PW + '@cluster0-fvmyf.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true
});

// stuff
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/searchItems', searchItemRoutes);
app.use('/users', userRoutes);
app.use('/items', itemRoutes);

app.get('/', (req, res, next) => {
  res.send("Team Souper Noodles Lab or Team Reform?");
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
