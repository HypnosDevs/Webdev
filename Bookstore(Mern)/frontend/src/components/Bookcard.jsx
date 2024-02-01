import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './Bookcard.css';
import { Link } from 'react-router-dom';
// import required modules
import { Pagination } from 'swiper/modules';
import { FaBasketShopping, FaMoneyCheckDollar, FaRegMoneyBill1 } from "react-icons/fa6";

const Bookcard = ({ books, headline }) => {
    return (
        <div className='my-0 px-4 lg:px-24'>
            <h2 className='text-5xl text-center font-bold text-black py-16'>{headline}</h2>

            {/* cards */}
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {books.map(book => (
                        <SwiperSlide key={book._id}>
                            <Link to={`/book/${book._id}`}>
                                <div className='relative'>
                                    <img src={book.imageURL} alt="" />
                                    <div>
                                        <FaBasketShopping className='w-10 h-10 absolute top-2 right-3 text-green-600' />
                                    </div>
                                </div>
                                <div >
                                    <h3>{book.bookTitle}</h3>
                                    <p>{book.authorName}</p>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}

export default Bookcard