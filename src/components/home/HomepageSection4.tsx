import Image from 'next/image'
import React from 'react'

const HomepageSection4 = () => {
  return (
    <div>
      <div className='h-auto w-full bg-lightYellow flex flex-col  lg:flex-row items-center justify-between px-4 md:px-16 lg:px-32 gap-6 lg:gap-32'>
              <Image src="/homepage4.png" alt='table' height={500} width={500} className='w-full lg:w-auto h-auto' />
              <div className='w-full  flex flex-col items-center lg:items-start justify-center gap-4 md:gap-6 lg:gap-7 text-center lg:text-left'>
                <h2 className='text-lg md:text-xl lg:text-2xl font-semibold'>New Arrivals</h2>
                <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Asgaard sofa</h1>
                <a href="/shop">
                  <button className='w-full lg:w-[255px] md:w-[200px] max-sm:w-[180px] h-[50px] md:h-[56px] lg:h-[64px] border rounded border-gray-800 text-base md:text-lg lg:text-xl hover:bg-cart'>Order Now</button>
                </a>
              </div>
            </div>
    </div>
  )
}

export default HomepageSection4
