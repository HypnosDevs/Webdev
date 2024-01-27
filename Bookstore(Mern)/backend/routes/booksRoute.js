import express from 'express';
import { Book } from '../models/bookModel.js'

const router = express.Router();


//Get all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find({});

        return res.status(200).json({
            count: books.length,
            data: books

        });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
})


// Creating new book
router.post('/', async (req, res) => {
    try {
        console.log(req.body)
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: "Please send all required fields"
            })
        }
        const newBook = {
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        }
        console.log(newBook)
        const book = await Book.create(newBook);

        return res.status(201).send(book);
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
})

// Update book
router.put('/:id', async (req, res) => {
    try {

        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).send({
                message: "Please send all required fields"
            })
        }
        const { id } = req.params;
        const book = await Book.findByIdAndUpdate(id, req.body);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).send({ message: 'Book update successfully' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }
})

//deletebook
router.delete('/:id', async (req, res) => {
    try {

        const { id } = req.params;
        const book = await Book.findByIdAndDelete(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        return res.status(200).send({ message: 'Book deleted successfully' });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ message: err.message });
    }

})

export default router;