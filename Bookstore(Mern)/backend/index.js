import { PORT, mongoDBURL } from "./config.js";
import express, { response } from 'express';
import cors from 'cors'
import { MongoClient, ObjectId, ServerApiVersion } from 'mongodb';

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(234).send('Welcome to mern');
})

//app.use('/books', booksRoute);

//mongodb config
const uri = mongoDBURL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect();

        //create a collection of documents
        const bookCollections = client.db("BookInventory").collection("books");


        //find by category
        app.get("/books/allBooks", async (req, res) => {
            try {
                let query = {};
                if (req.query?.category) {
                    query = { category: req.query.category }
                }
                const result = await bookCollections.find(query).toArray();
                return res.status(200).send(result);
            } catch (err) {
                console.log(err.message);
                res.status(500).send({ message: err.message });
            }
        })

        //get single book
        app.get("/books/detailBooks/:id", async (req, res) => {
            try {
                const { id } = req.params;

                const filter = { _id: new ObjectId(id) };
                const result = await bookCollections.findOne(filter);

                return res.status(200).send(result);
            } catch (err) {
                console.log(err.message);
                res.status(500).send({ message: err.message });
            }
        })



        // //get all books
        // app.get("/books/allBooks", async (req, res) => {
        //     try {
        //         const books = await bookCollections.find();
        //         const result = await books.toArray();
        //         return res.status(200).send(result);
        //     } catch (err) {
        //         console.log(err.message);
        //         res.status(500).send({ message: err.message });
        //     }
        // })

        //create one book
        app.post('/books/createBook', async (req, res) => {
            try {
                const newBook = req.body;
                console.log("newbook", newBook);
                const book = await bookCollections.insertOne(newBook);
                return res.status(201).send(book);
            } catch (err) {
                console.log(err.message);
                res.status(500).send({ message: err.message });
            }
        })
        //update book
        app.patch('/books/updateBook/:id', async (req, res) => {
            try {

                const { id } = req.params;
                const filter = { _id: new ObjectId(id) };
                const newData = req.body;
                const updateBook = {
                    $set: { ...newData }
                }
                const option = { upsert: true };

                const newBook = await bookCollections.updateOne(filter, updateBook, option);

                return res.status(201).send(newBook);
            } catch (err) {
                console.log(err.message);
                res.status(500).send({ message: err.message });
            }
        })

        //delete book
        app.delete('/books/deleteBook/:id', async (req, res) => {
            try {

                const { id } = req.params;
                const filter = { _id: new ObjectId(id) };
                const obsoleteBook = await bookCollections.deleteOne(filter);

                return res.status(201).send(obsoleteBook);
            } catch (err) {
                console.log(err.message);
                res.status(500).send({ message: err.message });
            }
        })


        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        //await client.close();
    }
}
run().catch(console.dir);

app.listen(PORT, () => {
    console.log(`APpp is listenting to ${PORT}`);
});

// mongoose
//     .connect(mongoDBURL)
//     .then(() => {
//         console.log('App connected to db');
//         app.listen(PORT, () => {
//             console.log(`APpp is listenting to ${PORT}`);
//         });
//     })
//     .catch((err) => {
//         console.log(err)
//     })