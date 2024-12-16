

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Home3 from '@/components/Home3'
import Mini from '@/components/Mini'
import Page2 from '@/components/Page2'
import Image from 'next/image'

import React from 'react'

const Shop = () => {
  return (
    <div className='h-fit w-full'>
      <Header />
      <Page2 heading='Shop' link='Shop' />

      <div className='h-auto w-full bg-pink mt-16 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-0 px-4 md:px-16 lg:px-28 py-4'>
        {/* Left Section */}
        <div className='flex flex-wrap gap-4 items-center'>
          <span className='flex items-center gap-2'>
            <Image src="/filter.png" alt='filter' width={25} height={25} />
            <h1 className='text-base md:text-lg'>Filter</h1>
          </span>
          <Image src="/dots.png" alt='dots' width={28} height={28} />
          <Image src="/lines.png" alt='lines' width={21} height={19} />
          <h1 className='text-sm md:text-lg'>| Showing 1–16 of 32 results</h1>
        </div>

        {/* Right Section */}
        <div className='flex flex-wrap gap-4 md:gap-8 items-center'>
          <span className='flex items-center gap-2 md:gap-4'>
            <h1 className='text-base md:text-lg'>Show</h1>
            <input type="text" placeholder='16' className='w-[40px] md:w-[45px] h-[40px] md:h-[45px] px-3 border border-gray-300 rounded' />
          </span>
          <span className='flex items-center gap-2 md:gap-4'>
            <h1 className='text-base md:text-lg'>Sort by</h1>
            <input type="text" placeholder='default' className='w-[100px] md:w-[122px] h-[30px] px-4 border border-gray-300 rounded' />
          </span>
        </div>
      </div>

      <div className='w-full max-w-[1440px] m-auto flex flex-wrap justify-center items-center gap-4 p-4'>
        <Home3 bgPicture='/homethree1.png' text='Trenton modular sofa_3' price='Rs. 25,000.00' />
        <Home3 bgPicture='/homethree2.png' text='Granite dining table dining chair' price='Rs. 25,000.00' />
        <Home3 bgPicture='/homethree3.png' text='Outdoor bar table and stool' price='Rs. 25,000.00' />
        <Home3 bgPicture='/homethree4.png' text='Plain console with teak mirror' price='Rs. 25,000.00' />
        <Home3 bgPicture='/pic5.png' text='Grain coffee table' price='Rs. 15,000.00' />
        <Home3 bgPicture='/pic6.png' text='Kent coffee table' price='Rs. 225,000.00' />
        <Home3 bgPicture='/pic7.png' text='Round coffee table_color 2' price='Rs. 251,000.00' />
        <Home3 bgPicture='/pic8.png' text='Reclaimed teak coffee table' price='Rs. 25,200.00' />
        <Home3 bgPicture='/pic8.png' text='Plain console_' price='Rs. 258,200.00 ' />
        <Home3 bgPicture='/pic10.png' text='Reclaimed teak Sideboard' price='Rs. 20,000.00' />
        <Home3 bgPicture='/pic11.png' text='SJP_0825 ' price='Rs. 200,000.00' />
        <Home3 bgPicture='/pic12.png' text='Bella chair and table' price='Rs. 100,000.00' />
        <Home3 bgPicture='/pic13.png' text='Granite square side table' price='Rs. 258,800.00' />
        <Home3 bgPicture='/pic14.png' text='Asgaard sofa' price='Rs. 250,000.00' />
        <Home3 bgPicture='/pic15.png' text='Maya sofa three seater' price='Rs. 244,000.00' />
        <Home3 bgPicture='/pic16.png' text='Outdoor sofa set' price='Rs. 244,000.00' />
      </div>

      <div className='w-full h-[300px] flex items-center'>
        <div className='w-full max-w-[400px] m-auto flex gap-4 sm:gap-6 justify-center'>
          <span className='bg-lightYellow h-[50px] w-[50px] flex rounded items-center justify-center text-lg font-semibold'>1</span>
          <span className='bg-yellow-50 h-[50px] w-[50px] flex rounded items-center justify-center text-lg'>2</span>
          <span className='bg-yellow-50 h-[50px] w-[50px] flex rounded items-center justify-center text-lg'>3</span>
          <span className='bg-yellow-50 h-[50px] w-[80px] flex rounded items-center justify-center text-lg font-medium'>Next</span>
        </div>
      </div>


      <div className='lg:h-[300px] h-auto w-full flex flex-wrap lg:flex-row gap-11 bg-pink items-center justify-center'>
        <Mini heading='Free Delivery' para='For all oders over $50, consectetur adipim scing elit.' />
        <Mini heading='90 Days Return' para='If goods have problems, consectetur adipim scing elit.' />
        <Mini heading='Secure Payment' para='100% secure payment, consectetur adipim scing elit.' />

      </div>
      <Footer />
    </div>
  )
}

export default Shop
