import React from 'react'
import { Link } from 'react-router-dom'
import bookPic from '../assets/awardbooks.png'


const Promotebanner = () => {
    return (
        <div className="mt-16 py-12 px-4 bg-teal-100">
            <div className='flex flex-col md:flex-row justify-between items-center gap-12'>
                <div className='md:w-1/2'>
                    <h2 className="text-4xl font-bold leading-snug">2023 Book awards afasdfasddasfasdfasdfasdadsfsda</h2>
                    <Link to="/shop" className='block'>
                        <button className='bg-teal-700 text-white text-xl font-semibold px-4 py-2 rounded-full mt-12 hover:bg-black transition-all duration-300'>
                            Get code
                        </button>
                    </Link>
                </div>
                <div>
                    <img src={bookPic} alt="" className='w-96' />
                </div>

            </div>
        </div>
    )
}

export default Promotebanner