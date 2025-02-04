import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Mini from '@/components/Mini'
import Page2 from '@/components/Page2'
import Image from 'next/image'
import React from 'react'

const Blog = () => {
  return (
    <>
      
      <Page2 heading='Blog' link='Blog' />
      <Image src="/blog.png" alt='blog' height={2710} width={1440} />
      <div className='h-[300px] w-full flex-wrap flex gap-11 bg-pink items-center justify-center'>
        <Mini heading='Free Delivery' para='For all oders over $50, consectetur adipim scing elit.' />
        <Mini heading='90 Days Return' para='If goods have problems, consectetur adipim scing elit.' />
        <Mini heading='Secure Payment' para='100% secure payment, consectetur adipim scing elit.' />

      </div>
     
    </>
  )
}

export default Blog
