import React from 'react'
import Favimg from "../assets/favoritebook.jpg"
import { Link } from 'react-router-dom'

const FavoriteBook = () => {
    return (
        <div className='px-4 lg:px-24 my-20 space-y-6 flex flex-col justify-between items-center md:flex-row'>
            <div className="md:w-1/2">
                <img src={Favimg} alt="" className=' rounded md:w-10/12' />
            </div>


            <div className="md:w-1/2">
                <h2 className='text-5xl font-bold md:w-3/4 leading-snug my-8'>Find your favorite  <span className=' text-teal-700'>Books here</span></h2>
                <p className='mb-10 text-lg md:w-5/6'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque voluptatibus sint repellat magnam aliquid veritatis quasi voluptatum, obcaecati distinctio quos vel sunt. Eligendi saepe eum facere animi necessitatibus ipsum ullam!</p>
                {/* stats */}
                <div className='flex flex-col sm:flex-row md:w-3/4 my-14 justify-between gap-4'>
                    <div>
                        <h3 className='text-3xl font-bold'>1000+</h3>
                        <p className='text-base'>Book List</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>800+</h3>
                        <p className='text-base'>Book List</p>
                    </div>
                    <div>
                        <h3 className='text-3xl font-bold'>500+</h3>
                        <p className='text-base'>Book List</p>
                    </div>
                </div>
                <Link to="/shop" className='block'>
                    <button className='bg-teal-700 text-white text-xl font-semibold px-4 py-2 rounded-full hover:bg-black transition-all duration-300'>
                        Explore more
                    </button>
                </Link>
            </div>


        </div>
    )
}

export default FavoriteBook