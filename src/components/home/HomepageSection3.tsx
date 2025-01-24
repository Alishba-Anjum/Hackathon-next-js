import React from 'react'
import Home3 from './Home3'

const HomepageSection3 = () => {
  return (
    <div>
      <div className='lg:h-[777px] max-md:h-auto h-auto w-full flex flex-col items-center justify-center  bg-white'>
        <div className='h-auto flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 p-4'>
          <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Top Picks For You</h1>
          <p className='text-sm md:text-base lg:text-lg text-slate-400 text-center'>
            Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.
          </p>
        </div>
        <div className='lg:h-[372px] h-auto w-full flex flex-col  lg:flex-row items-center gap-11 px-11 justify-center'>
          <Home3 bgPicture='/homethree1.png' text='Trenton modular sofa_3' price='Rs. 25,000.00' />
          <Home3 bgPicture='/homethree2.png' text='TGranite dining table w dining chair' price='Rs. 25,000.00' />
          <Home3 bgPicture='/homethree3.png' text='Outdoor bar table and stool' price='Rs. 25,000.00' />
          <Home3 bgPicture='/homethree4.png' text='Plain console with teak mirror' price='Rs. 25,000.00' />
        </div>
      </div>
    </div>
  )
}

export default HomepageSection3
