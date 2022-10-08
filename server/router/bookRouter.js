const express = require('express')
const router = express.Router();
const { addBook, getAll, updateBook, deleteBook } = require('../controllers/bookController');
const { adminCheck, authCheck } = require('../middleware/checkAuth')

router
    .get("/", authCheck, getAll)
    .post("/add", adminCheck, addBook)
    .patch("/update", adminCheck, updateBook)
    .delete("/delete", adminCheck, deleteBook)

module.exports = router;