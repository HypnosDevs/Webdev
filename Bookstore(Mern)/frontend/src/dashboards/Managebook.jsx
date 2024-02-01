import React, { useEffect, useState } from 'react'
import { Table } from 'flowbite-react';
import axios from "axios"
import { Link } from 'react-router-dom';


const Managebook = () => {

    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:5678/books/allBooks").then((res) => {
            setAllBooks(res.data);
        })
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:5678/books/deleteBook/${id}`,
            {
                method: "DELETE",
            }
        ).then((res) => {
            console.log(res.data);
            alert("Succesfully delete")
            setAllBooks(res.data);
        }
        ).catch((err) => {
            console.log('ERROR', err);
        })
    }

    return (
        <div className="px-4 my-12">
            <h2 className="mb-8 text-3xl font-bold">
                Manage book
            </h2>
            {/* table for book data */}

            <Table className='lg:w-[1180px]'>
                <Table.Head>
                    <Table.HeadCell>NO.</Table.HeadCell>
                    <Table.HeadCell>Book Title</Table.HeadCell>
                    <Table.HeadCell>Author Name</Table.HeadCell>
                    <Table.HeadCell>category</Table.HeadCell>
                    <Table.HeadCell>Price</Table.HeadCell>
                    {/* <Table.HeadCell>description</Table.HeadCell>
                    <Table.HeadCell>pdf url</Table.HeadCell> */}
                    <Table.HeadCell>
                        <span className="sr-only">Edit</span>
                    </Table.HeadCell>
                </Table.Head>
                {allBooks.map(({ bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL, _id }, idx) => {
                    return <Table.Body className="divide-y" key={_id}>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {idx + 1}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {bookTitle}
                            </Table.Cell>
                            <Table.Cell>{authorName}</Table.Cell>
                            <Table.Cell>{category}</Table.Cell>
                            <Table.Cell>$1999</Table.Cell>
                            <Table.Cell>
                                <Link to={`/admin/dashboard/editbook/${_id}`} className="bg-green-600 px-4 py-1 mx-2 rounded-md font-medium hover:shadow-xl text-white transition-all duration-300">
                                    Edit
                                </Link>
                                <button onClick={() => handleDelete(_id)} className='bg-red-700 px-4 py-1 mx-2 rounded-md font-medium text-white hover:shadow-xl transition-all duration-300'>Delete</button>
                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>;


                })}
                <Table.Body className="divide-y">
                    <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">




                    </Table.Row>

                </Table.Body>
            </Table>

        </div>
    )
}

export default Managebook