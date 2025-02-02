import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Input from '@/components/Input'
import Mini from '@/components/Mini'
import Page2 from '@/components/Page2'
import React from 'react'

const MyAccount = () => {
    return (
        <>
            <Header />
            <Page2 heading='My Account' link='My account' />
            <div className='h-auto w-full py-7 flex flex-wrap items-center justify-center gap-4 px-4 sm:px-8'>
                <div className='h-auto w-full sm:w-[608px] flex flex-col gap-8 p-6 sm:p-11'>
                    <h1 className='text-2xl sm:text-3xl font-bold'>Log In</h1>
                    <Input label='Username or email address' placeholder='' />
                    <Input label='Password' placeholder='' />
                    <div className='flex gap-4 items-center'>
                        <input type='checkbox' className='h-[20px] sm:h-[27px] w-[20px] sm:w-[30px] border border-slate-400 rounded' />
                        <h1 className='text-sm sm:text-base'>Remember me</h1>
                    </div>
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-11 items-center'>
                        <button className='w-full sm:w-[237px] h-[48px] rounded-2xl border border-black hover:bg-pink'>Log in</button>
                        <h1 className='text-sm sm:text-xl'>Lost Your Password?</h1>
                    </div>
                </div>

                <div className='h-auto w-full sm:w-[608px] flex flex-col gap-8 p-6 sm:p-16 sm:px-32'>
                    <h1 className='text-2xl sm:text-3xl font-bold'>Register</h1>
                    <Input label='Email address' placeholder='' />
                    <p className='text-xs sm:text-sm'>A link to set a new password will be sent to your email address.</p>
                    <p className='text-xs sm:text-sm'>
                        Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our
                        <span className='font-semibold'> privacy policy</span>.
                    </p>
                    <button className='w-full sm:w-[237px] h-[48px] rounded-2xl border border-black hover:bg-pink'>Register</button>
                </div>
            </div>

            <div className='lg:h-[200px] h-auto w-full flex flex-col lg:flex-row gap-11 bg-pink items-center justify-center'>
         <Mini heading='Free Delivery' para='For all oders over $50, consectetur adipim scing elit.' />
         <Mini heading='90 Days Return' para='If goods have problems, consectetur adipim scing elit.' />
         <Mini heading='Secure Payment' para='100% secure payment, consectetur adipim scing elit.' />

       </div>
            <Footer />
        </>
    )
}


export default MyAccount
