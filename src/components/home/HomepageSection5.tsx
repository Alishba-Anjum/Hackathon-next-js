import React from 'react'
import Home5 from './Home5'
import Link from 'next/link'

const HomepageSection5 = () => {
  return (
    <>
    <div className='h-auto w-full bg-white flex flex-col items-center gap-8 md:gap-10 py-8 md:py-12 lg:py-'>
        {/* Header Section */}
        <div className='h-auto flex flex-col items-center justify-center text-center gap-4 md:gap-6'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Our Blogs</h1>
          <p className='text-sm md:text-base lg:text-lg text-slate-400'>
            Find a bright ideal to suit your taste with our great selection.
          </p>
        </div>

        {/* Blogs Section */}
        <div className='h-auto w-full max-w-6xl flex  flex-col lg:flex-row gap-6 justify-center items-center px-4 md:px-8'>
          <div><Home5 image="/homefive1.png" /></div>
          <div className='lg:flex   sm:hidden max-sm:hidden'><Home5 image="/homefive2.png" /></div>
          <div className='lg:flex  sm:hidden max-sm:hidden'><Home5 image="/homefive3.png" /></div>
        </div>

        {/* View All Link */}
        <Link
          href="/blog"
          className='h-[40px] w-auto px-4 md:px-6 font-semibold text-sm md:text-lg border-b-2 border-black hover:text-gray-600'
        >
          View All Post
        </Link>
      </div>

    </>
  )
}

export default HomepageSection5

