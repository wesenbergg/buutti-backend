const logger = require("../utils/logger")

const requestLogger = (req, _res, next) => {
  logger.info("Method:", req.method)
  logger.info("Path:  ", req.path)
  logger.info("Body:  ", req.body)
  logger.info("---")
  next()
}

const unknownEndpoint = (_req, res) => {
  res.status(404).send({ error: "unknown endpoint" })
}

module.exports = {
  requestLogger,
  unknownEndpoint,
}