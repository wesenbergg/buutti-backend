  
const express = require('express');
const { data, previewData } = require('../data.js')
const bookRouter = express.Router();

bookRouter.get('/', (_req, res) => {  
  res.send({ data: previewData });
});

module.exports = bookRouter;