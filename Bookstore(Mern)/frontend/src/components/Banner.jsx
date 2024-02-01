import React from 'react'
import Bannercard from './Bannercard'

const Banner = () => {
    return (
        <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
            <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">

                {/* left */}
                <div className='md:w-1/2 h-full space-y-8'>

                    <h2 className='text-6xl font-bold leading-snug text-black'>Buy and sell here</h2>
                    <span className='text-6xl font-bold text-teal-700'>for the best prices</span>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, impedit nihil veniam tempore dolore quia repellendus blanditiis porro enim distinctio. Repudiandae error exercitationem sit nulla maxime facere, officiis nemo quia?</p>
                    <div>
                        <input type="text" name="search" placeholder='Search' id="search" className="py-2 px-2  outline-none" />
                        <button className='bg-teal-700 px-6 py-2 text-white font-medium hover:bg-black '>Search</button>
                    </div>
                </div>
                {/*right  */}
                <div>
                    <Bannercard />

                </div>

            </div>

        </div>
    )
}

export default Banner