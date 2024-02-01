import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Card } from 'flowbite-react';



export const Shop = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5678/books/allBooks').then((res) => {
            setBooks(res.data);
        })
    }, [])
    return (
        <div className="mt-28 px-4 lg:px-24">
            <h2 className="my-5 text-5xl font-bold text-center">All Books</h2>

            <div className='grid my-12 gap-8 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gird-cols-1'>
                {
                    books.map(({ imageURL, bookTitle, bookDescription, authorName }) => {
                        return <Card >
                            <img src={imageURL} alt="" className='w-96 mx-auto' />
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                {bookTitle}
                            </h5>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                {authorName}
                            </p>
                            <p className="font-normal text-gray-700 dark:text-gray-400">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est doloribus dolorum, placeat cupiditate quod maxime eum corporis libero, eos vel facilis earum, ducimus harum autem incidunt sunt natus excepturi sed!
                            </p>
                            <button className='uppercase bg-teal-700 text-white rounded-md py-2 mt-2 hover:bg-black transition-all duration-300'>Buy now</button>
                        </Card>

                    })
                }
            </div>
        </div>
    )
}

export default Shop;