var express = require('express');
var router = express.Router();
var booksController = require('../controllers/books.controller');

router.post('/', booksController.book_create);

module.exports = router;