import Header from '@/components/Header'
import Input from '@/components/Input'
import Page2 from '@/components/Page2'
import React from 'react'
import Mini from '@/components/Mini'
import Footer from '@/components/Footer'
const Checkout = () => {
  return (
    <>
   
      <Page2 heading='Check out' link='Checkout' />
      <div className='h-auto w-full flex flex-col lg:flex-row  gap-6 lg:gap-44 p-4 lg:p-0  md:px-16'>
  {/* left section */}
  <div className='h-auto flex flex-col  py-6 md:px-32 lg:py-11 w-full lg:w-[608px]'>
    <h1 className='text-2xl lg:text-3xl font-semibold'>Billing details</h1>
    <div className='w-full lg:w-[530px] flex flex-row lg:flex-row gap-8 lg:gap-24'>
      <div className='w-[230px] lg:w-[200px]'>
        <label htmlFor="firstname" id='firstname' className='font-semibold text-lg'>First Name</label>
        <input type='text' className='border border-neutral-400 w-full lg:w-[230px] px-2 rounded h-[50px]' />
      </div>
      <div className='w-[230px] lg:w-[200px]'>
        <label htmlFor="lastname" id='lastname' className='font-semibold text-lg'>Last Name</label>
        <input type='text' className='border border-neutral-400 w-full lg:w-[230px] px-2 rounded h-[50px]' />
      </div>
    </div>

    <Input label='Company Name (Optional)' placeholder='' />
    <Input label='Country / Region' placeholder='' />
    <Input label='Street address' placeholder='' />
    <Input label='Town / City' placeholder='' />
    <Input label='Province Western Province' placeholder='' />
    <Input label='ZIP code' placeholder='' />
    <Input label='Phone' placeholder='' />
    <Input label='Phone' placeholder='' />
    <Input label='Email address' placeholder='' />
    <Input label='' placeholder='Additional information' />
  </div>
  
  {/* right section */}
  <div className='h-auto w-full lg:w-[608px] flex py-24  '>
    <div className='h-auto w-full lg:w-[533px] flex flex-col gap-4  max-sm:items-center '>
      <div className='flex flex-row lg:flex-row gap-4 lg:gap-32'>
        <div className='flex flex-col gap-4'>
          <h1 className='text-lg font-semibold'>Product</h1>
          <h1 className='text-gray-400'>Asgaard sofa x 1</h1>
          <h1>Subtotal</h1>
          <h1>Total</h1>
        </div>
        <div className='flex flex-col gap-4 text-right'>
          <h1 className='text-lg font-semibold'>Subtotal</h1>
          <h1>Rs. 250,000.00</h1>
          <h1>Rs. 250,000.00</h1>
          <h1 className='font-semibold text-yellow-700 text-xl'>Rs. 250,000.00</h1>
        </div>
      </div>
      <hr className='mt-4' />
      {/* radio input */}
      <div className='flex flex-col gap-3 p-3'>
        <div className='flex gap-4'>
          <input type="radio" value="Direct Bank Transfer" name='radio' className='bg-black' />
          <h1>Direct Bank Transfer</h1>
        </div>
        <p className='text-gray-400 text-[16px]'>
          Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
        </p>
        <div className='flex gap-4 text-gray-400'>
          <input type="radio" value="Direct Bank Transfer" name='radio' />
          <label htmlFor="Direct Bank Transfer">Direct Bank Transfer</label>
        </div>
        <div className='flex gap-4 text-gray-400'>
          <input type="radio" value="Cash On Delivery" name='radio' />
          <label htmlFor="Cash On Delivery">Cash On Delivery</label>
        </div>
        <p>
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
          <span className='font-semibold'> privacy policy</span>.
        </p>
      </div>
      <div className='flex justify-center'>
        <button className="w-full lg:w-[237px] sm:w-[200px] max-sm:w-[200px] h-[48px] rounded-2xl text-sm lg:text-lg border border-black hover:bg-yellow-700">
          Place Order
        </button>
      </div>
    </div>
  </div>
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

export default Checkout
