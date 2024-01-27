import { PORT, mongoDBURL } from "./config.js";
import express, { response } from 'express';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();
app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to mern');
})

app.use('/books', booksRoute);


mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to db');
        app.listen(PORT, () => {
            console.log(`APpp is listenting to ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err)
    })