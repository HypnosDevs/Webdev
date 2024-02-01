import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import Bookcard from './Bookcard'

const BestSellerBook = () => {
    const [books, setBook] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5678/books/allBooks').then((res) => {
            setBook(res.data.slice(0, 8));
            // console.log(res.data)
        }).catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <div><Bookcard books={books} headline={"Best seller books"} /></div>
    )
}

export default BestSellerBook