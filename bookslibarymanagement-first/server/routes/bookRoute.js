const express = require('express');
const { createBook, editBook, showAllBooks, deleteBook } = require('../controller/bookControoler');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });

const router = express.Router();

router.post('/', upload.single('image'), createBook);
router.put('/:id', upload.single('image'), editBook);
router.get('/', showAllBooks);
router.delete('/:id', deleteBook);

module.exports = router;
