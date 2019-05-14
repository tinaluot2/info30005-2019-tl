const express = require('express');
const app = express();
//something just for terminal feedback, doesn't matter
const morgan = require('morgan');
//something for CORS, probably not needed
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

const itemRoutes = require('./routes/api/items');
const userRoutes = require('./routes/api/users');
const userSignupRoutes = require('./routes/api/userSignup');

const cors = require('cors');
// for file uploading

// connecting to mongoDB
mongoose.connect('mongodb+srv://jungew:' + process.env.MONGO_ATLAS_PW + '@cluster0-fvmyf.mongodb.net/test?retryWrites=true', {
  useNewUrlParser: true
});

// stuff
app.use(cors());
app.use(morgan('dev'));
// make the 'images' folder public
app.use('/uploads', express.static('uploads'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);
app.use('/api/userSignup', userSignupRoutes);

// app.get('/', (req, res, next) => {
//   res.send("Team Souper Noodles Lab");
// });

//error handling
// app.use((req, res, next) => {
//   const error = new Error('Route not found');
//   error.status = 404;
//   next(error);
// })

// app.use((error, req, res, next) => {
//   res.status(error.status || 500);
//   res.json({
//     error: {
//       message: error.message
//     }
//   });
// });

// Handle production
if (process.env.NODE_ENV === 'production') {
  // Static folder
  app.use(express.static(__dirname + '/public/'));

  // Handle SPA
  app.get(/.*/, (req, res) => res.sendFile(__dirname + '/public/index.html'));
}

module.exports = app;