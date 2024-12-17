import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Mini from '@/components/Mini'
import Page2 from '@/components/Page2'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Cart = () => {
  return (
    <>
      <Header />
      <Page2 heading='Cart' link='Cart' />
      <div className="w-full py-24 flex flex-col lg:flex-row gap-8 lg:gap-32 justify-center lg:justify-around ">

        <div className="w-full lg:w-[517px] flex flex-col gap-7">

          <div className="w-full lg:w-[817px] h-[55px] flex justify-between lg:justify-evenly bg-cart rounded items-center px-4 lg:px-0">
            <span className="flex flex-col lg:flex-row lg:gap-20 font-semibold text-sm lg:text-lg">
              <h1>Product</h1>
              <h1>Price</h1>
            </span>
            <span className="flex flex-col lg:flex-row lg:gap-16 font-semibold text-sm lg:text-lg">
              <h1>Quantity</h1>
              <h1>Subtotal</h1>
            </span>
          </div>


          <div className="flex flex-wrap lg:flex-nowrap h-auto lg:h-[200px] w-[300px] lg:w-[817px] gap-4 lg:gap-11 items-center">
            <div className="bg-lightYellow h-[80px] w-[100px] lg:w-[100px] flex p-2 rounded">
              <Image src="/sofa.png" alt="" height={110} width={106} />
            </div>
            <div className="flex flex-wrap lg:flex-nowrap w-full lg:w-[817px] h-auto lg:h-[25px] gap-4 lg:gap-16 items-center">
              <h1 className="text-gray-400 text-sm lg:text-base">Asgaard sofa</h1>
              <h1 className="text-gray-400 text-sm lg:text-base">Rs. 250,000.00</h1>
              <button className="h-[32px] w-[32px] rounded px-2 bg-gray-200">1</button>
              <h1 className="text-sm lg:text-base">Rs. 250,000.00</h1>
              <Image src="/delete.png" alt="" height={28} width={28} />
            </div>
          </div>
        </div>
        
               {/* cart total */}

        <div className="w-full lg:w-[393px] h-auto lg:h-[390px] flex flex-col items-center gap-6 lg:gap-11 py-8 lg:py-11 bg-cart rounded">
          <h1 className="text-2xl lg:text-4xl font-semibold">Cart Totals</h1>
          <div className="flex justify-evenly w-full px-6 lg:px-0 lg:gap-11">
            <h1 className="font-semibold text-sm lg:text-base">Subtotal</h1>
            <h2 className="font-semibold text-gray-400 text-sm lg:text-base">Rs. 250,000.00</h2>
          </div>
          <div className="flex justify-evenly w-full px-6 lg:px-0 lg:gap-11">
            <h1 className="font-semibold text-sm lg:text-base">Total</h1>
            <h2 className="font-semibold text-yellow-700 text-sm lg:text-xl">Rs. 250,000.00</h2>
          </div>
          <Link href="/checkout">
            <button className="w-full lg:w-[237px] sm:w-[200px] max-sm:w-[200px] h-[48px] rounded-2xl text-sm lg:text-lg border border-black hover:bg-lightYellow">
              Check out
            </button>
          </Link>
        </div>
      </div>

      <div className='lg:h-[300px] w-full flex flex-wrap h-auto gap-11 bg-pink items-center justify-center'>
        <Mini heading='Free Delivery' para='For all oders over $50, consectetur adipim scing elit.' />
        <Mini heading='90 Days Return' para='If goods have problems, consectetur adipim scing elit.' />
        <Mini heading='Secure Payment' para='100% secure payment, consectetur adipim scing elit.' />

      </div>
      <Footer />
    </>
  )
}

export default Cart
