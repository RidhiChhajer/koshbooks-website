const getAll = (req, res, next) => {
    res.status(200).send('All Books');
}

const addBook = (req, res, next) => {
    res.status(200).send('Added Book');
}

const updateBook = (req, res, next) => {
    res.status(200).send('Update Book');
}

const deleteBook = (req, res, next) => {
    res.status(200).send('Delete Book');
}

module.exports = {
    addBook,
    getAll,
    updateBook,
    deleteBook
}