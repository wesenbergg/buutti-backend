  
const express = require('express');
const { getBooks, getBookById, updateBookById, postBook, deleteBook } = require('../controllers/bookController.js');
const { bookExists, validateBookBody } = require('../middlewares/bookMiddleware.js');
const bookRouter = express.Router();

bookRouter.get('/', getBooks);

bookRouter.post('/', validateBookBody, postBook);

bookRouter.get('/:id', bookExists, getBookById);

bookRouter.put('/:id', bookExists, validateBookBody, updateBookById);

bookRouter.delete('/:id', bookExists, deleteBook);

module.exports = bookRouter;