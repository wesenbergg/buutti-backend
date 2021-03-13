const { findDataById } = require("../data");

const bookExists = (req, res, next) => {
  const { id } = req.params
  if(!id || Number.isNaN(parseInt(id)))
    return res.status(400).send("Expected number as id parameter instead: "+id)
  const foundBook = findDataById(id)
  if(!foundBook)
    return res.status(400).send("Book by id "+id+" not found")
  req.book = foundBook
  return next()
}

const validateBookBody = (req, res, next)  => {
  const { title, author, description } = req.body
  if(!title || typeof title !== "string" || title.length < 3)
    return res.status(400).send("Invalid title")
  if(!author || typeof author !== "string" || author.length < 3)
    return res.status(400).send("Invalid author")
  if(!description || typeof description !== "string" || description.length < 3)
    return res.status(400).send("Invalid description")
  return next()
}

module.exports = { bookExists, validateBookBody };