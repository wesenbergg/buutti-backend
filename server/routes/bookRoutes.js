  
const express = require('express');
const { getBooks, getBookById, updateBookById, postBook, deleteBook } = require('../controllers/bookController.js');
const bookRouter = express.Router();

bookRouter.get('/', getBooks);

bookRouter.post('/', postBook);

bookRouter.get('/:id', getBookById);

bookRouter.put('/:id', updateBookById);

bookRouter.delete('/:id', deleteBook);

module.exports = bookRouter;