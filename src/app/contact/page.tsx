import ContactPage from '@/components/Contact'
import Header from '@/components/Header'
import Page2 from '@/components/Page2'
import React from 'react'
import Input from '@/components/Input'
import Mini from '@/components/Mini'
import Footer from '@/components/Footer'


const Contact = () => {
  return (
    <>
      <Header />
      <Page2 heading='Contact' link='Contact' />
      <div className="flex flex-col items-center gap-16 py-14 px-6 md:gap-24 lg:gap-32 lg:py-28">

        <div className="flex flex-col items-center gap-4 text-center">
          <h1 className="text-2xl md:text-3xl font-semibold">Get In Touch With Us</h1>
          <p className="text-base md:text-lg lg:text-xl text-gray-400">
            For More Information About Our Product & Services, Please Feel Free To Drop Us
            <br />
            An Email. Our Staff Will Always Be There To Help You Out. Do Not Hesitate!
          </p>
        </div>


        <form className="flex flex-wrap justify-center gap-8 lg:gap-16 lg:flex-nowrap w-full max-w-screen-xl">
          <div className="flex flex-col gap-8 w-full max-w-md px-4 md:px-8">
            <ContactPage
              image="/contact1.png"
              heading="Address"
              p1="236 5th SE Avenue, New"
              p2="York NY10000, United States"
            />
            <ContactPage
              image="/contact2.png"
              heading="Phone"
              p1="Mobile: +(84) 546-6789"
              p2="Hotline: +(84) 456-6789"
            />
            <ContactPage
              image="/contact3.png"
              heading="Working Time"
              p1="Monday-Friday: 9:00 - 22:00"
              p2="Saturday-Sunday: 9:00 - 21:00"
            />
          </div>

          {/* Form Inputs */}
          <div className="flex flex-col gap-8 w-full max-w-lg px-4 md:px-8">
            <Input label="Your name" placeholder="Abc" />
            <Input label="Email address" placeholder="Abc@def.com" />
            <Input label="Subject" placeholder="This is optional" />
            <div className="flex flex-col gap-4">
              <label className="text-lg font-semibold">Message</label>
              <textarea
                placeholder="Hi! I’d like to ask about..."
                className="px-6 border border-neutral-400 rounded-md w-full h-[120px] resize-none"
              />
              <button className="w-[237px] h-[48px] rounded-2xl border border-black hover:bg-lightYellow">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className='h-[300px] w-full flex flex-wrap gap-11 bg-pink items-center justify-center'>
        <Mini heading='Free Delivery' para='For all oders over $50, consectetur adipim scing elit.' />
        <Mini heading='90 Days Return' para='If goods have problems, consectetur adipim scing elit.' />
        <Mini heading='Secure Payment' para='100% secure payment, consectetur adipim scing elit.' />

      </div>
      <Footer />
    </>
  )
}

export default Contact
