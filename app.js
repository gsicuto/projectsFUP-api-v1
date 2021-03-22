require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: ${x.connections[0].name}`);
  })
  .catch((err) => {
    console.error(`Error connecting to mongo: ${err}`);
  });

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//  Routes Middleware
const apiRoutes = require('./routes/api.routes');

app.use('/', apiRoutes);

module.exports = app;
