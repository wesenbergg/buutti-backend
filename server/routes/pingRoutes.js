  
const express = require('express');

const pingRouter = express.Router();

pingRouter.get('/', (_req, res) => {
  console.log('someone pinged here');
  res.status(200).send({ data: 'pong' });
});

module.exports = pingRouter;