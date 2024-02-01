
// const router = express.Router();


// //find by category
// app.get("/allBooks", async (req, res) => {
//     try {
//         let query = {};
//         if (req.query?.category) {
//             query = { category: req.query.category }
//         }
//         const result = await bookCollections.find(query).toArray();
//         return res.status(200).send(result);
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send({ message: err.message });
//     }
// })



// // //get all books
// // app.get("/books/allBooks", async (req, res) => {
// //     try {
// //         const books = await bookCollections.find();
// //         const result = await books.toArray();
// //         return res.status(200).send(result);
// //     } catch (err) {
// //         console.log(err.message);
// //         res.status(500).send({ message: err.message });
// //     }
// // })
// //create one book
// app.post('/createBook', async (req, res) => {
//     try {
//         const newBook = req.body;
//         const book = await bookCollections.insertOne(newBook);
//         return res.status(201).send(book);
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send({ message: err.message });
//     }
// })
// //update book
// app.patch('/updateBook/:id', async (req, res) => {
//     try {

//         const { id } = req.params;
//         const filter = { _id: new ObjectId(id) };
//         const newData = req.body;
//         const updateBook = {
//             $set: { ...newData }
//         }
//         const option = { upsert: true };

//         const newBook = await bookCollections.updateOne(filter, updateBook, option);

//         return res.status(201).send(newBook);
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send({ message: err.message });
//     }
// })

// //delete book
// app.delete('/deleteBook/:id', async (req, res) => {
//     try {

//         const { id } = req.params;
//         const filter = { _id: new ObjectId(id) };
//         const obsoleteBook = await bookCollections.deleteOne(filter);

//         return res.status(201).send(obsoleteBook);
//     } catch (err) {
//         console.log(err.message);
//         res.status(500).send({ message: err.message });
//     }
// })



// export default router;