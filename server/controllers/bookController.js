const { previewData, updateById, addData, deleteById } = require('../data.js')

const getBooks = (_req, res) => {  
  return res.status(200).send(previewData());
}

const getBookById = (req, res) => {
  return res.status(200).send(req.book);
}

const updateBookById = (req, res) => {
  const { params, body } = req;
  const updatedBook = updateById(params.id, body)
  return res.status(200).send(updatedBook);
}

const postBook = (req, res) => {
  const { body } = req;
  const addedBook = addData(body)
  return res.status(200).send(addedBook);
}

const deleteBook = (req, res) => {
  const { id } = req.params;
  deleteById(id)
  return res.status(200).send("Successfully deleted book by id: "+id);
}

module.exports = { getBooks, getBookById, updateBookById, postBook, deleteBook };