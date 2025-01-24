import Image from 'next/image'
import React from 'react'

const HomepageSection6 = () => {
  return (
    <div>
      <div className='h-auto w-full flex flex-col items-center justify-center gap-6 py-8 relative'>
        <Image
          src="/home6.png"
          alt='Instagram background'
          height={450}
          width={1000}
          className='w-full max-sm:h-[600px] absolute -z-10'
        />
        <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold text-center'>Our Instagram</h1>
        <div className='h-auto w-full max-w-md flex flex-col items-center justify-center gap-4 text-center'>
          <p className='text-base md:text-lg lg:text-xl'>Follow our store on Instagram</p>
          <button className='h-12 md:h-14 lg:h-16 w-40 md:w-48 lg:w-64 rounded-full border bg-white shadow-lg text-sm md:text-lg lg:text-xl hover:shadow-xl transition'>
            Follow Us
          </button>
        </div>
      </div>
    </div>
  )
}

export default HomepageSection6
