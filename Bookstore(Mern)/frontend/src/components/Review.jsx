import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaStar } from "react-icons/fa6"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import profile from '../assets/profile.jpg'
import { Avatar } from 'flowbite-react';


// import required modules
import { Navigation, Pagination, History } from 'swiper/modules';
const Review = () => {
    return (
        <div className='my-12 px-4 lg:px-24'>
            <h2 className='text-5xl font-bold text-center mb-10 leading-snug'>Books review</h2>
            <div className='py-5'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    {/* text */}

                    <SwiperSlide>
                        <div className='space-x-6 py-8 px-4 md:m-5 rounded-xl border'>
                            <div className='text-amber-400 flex gap-2 justify-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/*text*/}
                            <div className='my-5'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni numquam rerum enim ducimus dolore harum iste sequi pariatur culpa consequatur provident, reprehenderit expedita ullam eveniet quaerat maiores dolorem at!</p>
                                <Avatar img={profile} rounded bordered className='w-24 my-5 mx-auto' />
                                <h5 className="text-xl font-medium">Alizabetga gagapete</h5>
                                <p className='text-base'>CEO, Supajit Company</p>
                            </div>
                        </div>
                    </SwiperSlide>         <SwiperSlide>
                        <div className='space-x-6 py-8 px-4 md:m-5 rounded-xl border'>
                            <div className='text-amber-400 flex gap-2 justify-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/*text*/}
                            <div className='my-5'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni numquam rerum enim ducimus dolore harum iste sequi pariatur culpa consequatur provident, reprehenderit expedita ullam eveniet quaerat maiores dolorem at!</p>
                                <Avatar img={profile} rounded bordered className='w-24 my-5 mx-auto' />
                                <h5 className="text-xl font-medium">Alizabetga gagapete</h5>
                                <p className='text-base'>CEO, Supajit Company</p>
                            </div>
                        </div>
                    </SwiperSlide>         <SwiperSlide>
                        <div className='space-x-6 py-8 px-4 md:m-5 rounded-xl border'>
                            <div className='text-amber-400 flex gap-2 justify-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/*text*/}
                            <div className='my-5'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni numquam rerum enim ducimus dolore harum iste sequi pariatur culpa consequatur provident, reprehenderit expedita ullam eveniet quaerat maiores dolorem at!</p>
                                <Avatar img={profile} rounded bordered className='w-24 my-5 mx-auto' />
                                <h5 className="text-xl font-medium">Alizabetga gagapete</h5>
                                <p className='text-base'>CEO, Supajit Company</p>
                            </div>
                        </div>
                    </SwiperSlide>         <SwiperSlide>
                        <div className='space-x-6 py-8 px-4 md:m-5 rounded-xl border'>
                            <div className='text-amber-400 flex gap-2 justify-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/*text*/}
                            <div className='my-5'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni numquam rerum enim ducimus dolore harum iste sequi pariatur culpa consequatur provident, reprehenderit expedita ullam eveniet quaerat maiores dolorem at!</p>
                                <Avatar img={profile} rounded bordered className='w-24 my-5 mx-auto' />
                                <h5 className="text-xl font-medium">Alizabetga gagapete</h5>
                                <p className='text-base'>CEO, Supajit Company</p>
                            </div>
                        </div>
                    </SwiperSlide>         <SwiperSlide>
                        <div className='space-x-6 py-8 px-4 md:m-5 rounded-xl border'>
                            <div className='text-amber-400 flex gap-2 justify-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/*text*/}
                            <div className='my-5'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni numquam rerum enim ducimus dolore harum iste sequi pariatur culpa consequatur provident, reprehenderit expedita ullam eveniet quaerat maiores dolorem at!</p>
                                <Avatar img={profile} rounded bordered className='w-24 my-5 mx-auto' />
                                <h5 className="text-xl font-medium">Alizabetga gagapete</h5>
                                <p className='text-base'>CEO, Supajit Company</p>
                            </div>
                        </div>
                    </SwiperSlide>         <SwiperSlide>
                        <div className='space-x-6 py-8 px-4 md:m-5 rounded-xl border'>
                            <div className='text-amber-400 flex gap-2 justify-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/*text*/}
                            <div className='my-5'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni numquam rerum enim ducimus dolore harum iste sequi pariatur culpa consequatur provident, reprehenderit expedita ullam eveniet quaerat maiores dolorem at!</p>
                                <Avatar img={profile} rounded bordered className='w-24 my-5 mx-auto' />
                                <h5 className="text-xl font-medium">Alizabetga gagapete</h5>
                                <p className='text-base'>CEO, Supajit Company</p>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='space-x-6 py-8 px-4 md:m-5 rounded-xl border'>
                            <div className='text-amber-400 flex gap-2 justify-center'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>

                            {/*text*/}
                            <div className='my-5'>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio magni numquam rerum enim ducimus dolore harum iste sequi pariatur culpa consequatur provident, reprehenderit expedita ullam eveniet quaerat maiores dolorem at!</p>
                                <Avatar img={profile} rounded bordered className='w-24 my-5 mx-auto' />
                                <h5 className="text-xl font-medium">Alizabetga gagapete</h5>
                                <p className='text-base'>CEO, Supajit Company</p>
                            </div>
                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


        </div >
    )
}

export default Review