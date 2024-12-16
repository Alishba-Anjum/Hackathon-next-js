
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Homepage2 from '@/components/Home2'
import Home3 from '@/components/Home3'
import Home5 from '@/components/Home5'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='bg-lightYellow h-[900px] w-full  '>
      <Header />
      <div className='flex flex-col lg:flex-row  items-center justify-center w-full h-[800px]  '>
        <div className='w-full lg:w-[600px] h-auto flex flex-col  max-sm:items-center gap-6 lg:gap-11 lg:ml-36 text-center lg:text-left max-md:items-center  ' >
          <h1 className='text-3xl lg:text-7xl font-semibold leading-snug lg:leading-relaxed'>Rocket single seater</h1>
          <Link href="/shop" className='h-[50px] w-auto lg:w-[121px] md:w-[150px] sm:w-[150px] font-semibold text-lg lg:text-2xl border-b-2 flex items-center justify-center lg:justify-start border-black hover:text-yellow-600'> Shop Now
            <span></span></Link>
        </div>

        <Image src="/homepage.png" alt='SOfa' width={853} height={1000} />
      </div>
      {/* homepage 2 */}

      <div className='lg:h-[672px] h-auto w-full  flex flex-col lg:flex-row items-center lg:gap-32 md:hidden sm:hidden  bg-lightGray'>
        <Homepage2 bgImage="/sidetable.png" heading='Side Table' linkText='View More' />
        <div className=':hidden'>
          <Homepage2 bgImage="/sidetable2.png" heading='Side Table' linkText='View More' />
        </div>
      </div>

      {/* homepage 3 */}
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

      {/* homepage 4 */}
      <div className='h-auto w-full bg-lightYellow flex flex-col lg:flex-row items-center px-4 md:px-16 lg:px-32 gap-6 lg:gap-7'>
        <Image src="/homepage4.png" alt='table' height={600} width={800} className='w-full lg:w-auto h-auto' />
        <div className='w-full lg:w-[600px] flex flex-col items-center lg:items-start justify-center gap-4 md:gap-6 lg:gap-7 text-center lg:text-left'>
          <h2 className='text-lg md:text-xl lg:text-2xl font-semibold'>New Arrivals</h2>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold'>Asgaard sofa</h1>
          <a href="/shop">
            <button className='w-full lg:w-[255px] md:w-[200px] max-sm:w-[180px] h-[50px] md:h-[56px] lg:h-[64px] border rounded border-gray-800 text-base md:text-lg lg:text-xl hover:bg-cart'>Order Now</button>
          </a>
        </div>
      </div>


      {/* home page 5 */}

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

      {/* home page 6 */}

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

      <Footer />

    </div>
  )
}

export default page
