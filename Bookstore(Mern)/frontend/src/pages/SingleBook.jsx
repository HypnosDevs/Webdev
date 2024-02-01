import React from 'react'
import { useLoaderData } from 'react-router-dom';
import OtherBooks from '../components/OtherBooks';

export const SingleBook = () => {
    const { _id, bookTitle, imageURL, authorName, bookDescription, category, bookPDFURL } = useLoaderData();
    return (
        <div className="mt-14 px-4 lg:px-24 py-24 h-screen bg-black text-white">

            <div className="px-4 lg:px-24 flex items-center bg-gray-800">
                <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-4">
                    {/* left */}
                    <div className='flex flex-col gap-6'>
                        <h2 className='text-5xl text-center font-bold leading-snug '>{category}</h2>
                        <img src={imageURL} alt="book image" className='h-96
            6' />   <a href={bookPDFURL} target="_blank" className='text-2xl text-center bg-teal-600 text-white px-4 py-4 rounded-lg hover:bg-black transition-all duration-300'>READ ME</a>
                    </div>
                    {/* right */}
                    <div className='md:w-2/3 h-full space-y-3'>

                        <h2 className='text-6xl font-bold leading-snug '>{bookTitle}</h2>

                        <h3 className='text-3xl font-bold text-teal-700'>{authorName} </h3>
                        <p className='text-2xl'>{bookDescription}</p>
                        {/* <div>
                            <input type="text" name="search" placeholder='Search' id="search" className="py-2 px-2  outline-none" />
                            <button className='bg-teal-700 px-6 py-2 text-white font-medium hover:bg-black '>Search</button>
                        </div> */}
                    </div>


                </div>

            </div>
            {/* <div>
                <OtherBooks />
            </div> */}
        </div>

    )
}

export default SingleBook;