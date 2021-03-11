const { previewData, findDataById, updateById, addData, deleteById } = require('../data.js')

const getBooks = (_req, res) => {  
  return res.status(200).send({ data: previewData() });
}

const getBookById = (req, res) => {
  const id = req.params.id;
  const foundData = findDataById(id)
  return res.status(200).send({ data: foundData });
}

const updateBookById = (req, res) => {
  const { params, body } = req;
  updateById(params.id, body)
  return res.status(200);
}

const postBook = (req, res) => {
  const { body } = req;
  console.log(body);
  addData(body)
  return res.status(200);
}

const deleteBook = (req, res) => {
  const { params } = req;
  deleteById(params.id)
  return res.status(200);
}

module.exports = { getBooks, getBookById, updateBookById, postBook, deleteBook };