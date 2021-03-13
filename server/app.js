const express = require('express');
const pingRouter = require('./routes/pingRoutes');
const bookRouter = require('./routes/bookRoutes');
const middleware = require("./middlewares/middleware");

require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger)

app.use('/api/ping', pingRouter); // Test routes
app.use('/api/books', bookRouter);

app.use(middleware.unknownEndpoint)

module.exports = app