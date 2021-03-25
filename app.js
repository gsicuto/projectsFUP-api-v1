require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const logger = require('morgan');

// Connect DB

require('./configs/db.config');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Fup Project API',
      version: '1.0.0',
      description:
        '',
      license: {
        name: 'MIT',
        url: 'https://spdx.org/licenses/MIT.html',
      },
      contact: {
        name: 'LogRocket',
        url: 'https://logrocket.com',
        email: 'info@email.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api',
      },
    ],
  },
  apis: ['./routes/*.js'],
};

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const specs = swaggerJsdoc(options);

app.use(
  '/api-docs',
  swaggerUi.serve,
  swaggerUi.setup(specs),
);

//  Routes Middleware
const apiRoutes = require('./routes/api.routes');

app.use('/api/', apiRoutes);

module.exports = app;
