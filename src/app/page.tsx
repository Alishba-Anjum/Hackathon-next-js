
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Homepage2 from '@/components/home/Home2'
import HomepageSection3 from '@/components/home/HomepageSection3'
import HomepageSection4 from '@/components/home/HomepageSection4'
import HomepageSection5 from '@/components/home/HomepageSection5'
import HomepageSection6 from '@/components/home/HomepageSection6'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div className='bg-lightYellow h-[900px] w-full  '>
      <Header />
      <div className='flex flex-col lg:flex-row  items-center justify-center w-full h-[800px]  '>
        <div className='w-full lg:w-[600px] h-auto flex flex-col max-lg:items-center  max-lg:h-auto max-sm:items-center gap-6 lg:gap-11 lg:ml-36 text-center lg:text-left max-md:items-center  ' >
          <h1 className='text-3xl lg:text-7xl font-semibold leading-snug lg:leading-relaxed'>Rocket single seater</h1>
          <Link href="/shop" className='h-[50px] w-auto lg:w-[121px] md:w-[150px] sm:w-[150px] font-semibold text-lg lg:text-2xl border-b-2 flex items-center justify-center lg:justify-start border-black hover:text-yellow-600'> Shop Now
            <span></span></Link>
        </div>

        <Image src="/homepage.png" alt='SOfa' width={853} height={1000} />
      </div>
      {/* homepage 2 */}

      {/* <div className='lg:h-[572px] h-auto w-full justify-center flex flex-col lg:flex-row items-center lg:gap-11  sm:hidden lg:flex bg-lightGray'>
        <Homepage2 bgImage="/sidetable.png" heading='Side Table' linkText='View More' />
        <div className=':hidden'>
          <Homepage2 bgImage="/sidetable2.png" heading='Side Table' linkText='View More' />
        </div>
      </div> */}

      {/* homepage 3 */}
      <HomepageSection3 />

      {/* homepage 4 */}
      <HomepageSection4 />

      {/* home page 5 */}
     <HomepageSection5 />
    
      {/* home page 6 */}
      <HomepageSection6 />

      <Footer />

    </div>
  )
}

export default page
