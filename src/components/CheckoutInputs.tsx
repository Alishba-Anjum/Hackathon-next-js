import React, { useState } from 'react'
import Checkout from '@/app/checkout/page'

const CheckoutInputs = () => {
    const [formValues, setFormValues] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zipCode: "",
        phone: "",
        email: "",
        province: "",
        country: "",
        additionalinformation: "",
    
      });
    
      const [formErrors, setFormErrors] = useState({
        firstName: false,
        lastName: false,
        address: false,
        city: false,       
        zipCode: false,
        phone: false,
        email: false,
        province: false,    
        country: false,   
        additionalinformation: false 
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormValues({
          ...formValues,
          [e.target.name]: e.target.value,
        });
      };
    
      const validateForm = () => {
        const errors = {
          firstName: !formValues.firstName,
          lastName: !formValues.lastName,
          address: !formValues.address,
          city: !formValues.city, 
          zipCode: !formValues.zipCode,
          phone: !formValues.phone,
          email: !formValues.email, 
          province: !formValues.province, 
          country: !formValues.country, 
          additionalinformation: !formValues.additionalinformation 
        };
      
      
      
        console.log("Form Values:", formValues);  // Debugging
        console.log("Errors Object:", errors);  // Debugging
      
        setFormErrors(errors);
        
        return Object.values(errors).every((error) => !error);
      };
      
    
    
  return (
    <div>
      <div className='h-auto flex flex-col  py-6 md:px-32 lg:py-11 w-full lg:w-[608px]'>
          <h1 className='text-2xl lg:text-3xl font-semibold'>Billing details</h1>
          <div className='w-full lg:w-[530px] flex flex-row lg:flex-row gap-8 lg:gap-24'>

            {/* form input */}
            <div className='w-[230px] lg:w-[200px]'>
              <label htmlFor="firstname" id='firstname' className='font-semibold text-lg'>First Name</label>
              <input type='text'
                placeholder="First Name"
                name="firstName"
                value={formValues.firstName}
                onChange={handleInputChange}
                className='border border-neutral-400 w-full lg:w-[230px] px-2 rounded h-[50px]'
              />
              {formErrors.firstName && (
                <p className="text-sm text-red-500">First name is required.</p>
              )}
            </div>

            <div className='w-[230px] lg:w-[200px]'>
              <label htmlFor="lastname" id='lastname' className='font-semibold text-lg'>Last Name</label>
              <input type='text'
              name="lastName"
                placeholder="Last Name"
                value={formValues.lastName}
                onChange={handleInputChange}
                className='border border-neutral-400 w-full lg:w-[230px] px-2 rounded h-[50px]'
              />
              {formErrors.lastName && (
                <p className="text-sm text-red-500">last name is required.</p>
              )}
            </div>
          </div>

          <div className='w-full sm:w-[530px] h-auto flex flex-col gap-2 sm:gap-4'>
            <label htmlFor="companyName" className='text-sm sm:text-lg font-semibold'>Address</label>
            <input
              type="text"
              name="address"
              placeholder='address'
              value={formValues.address}
              onChange={handleInputChange}
              className='px-4 sm:px-6 border border-neutral-400 rounded-md w-full sm:w-[500px] h-[50px] sm:h-[75px]'
            />
            {formErrors.address && (
              <p className="text-sm text-red-500">address is required.</p>
            )}
          </div>

          <div className='w-full sm:w-[530px] h-auto flex flex-col gap-2 sm:gap-4'>
            <label htmlFor="country" className='text-sm sm:text-lg font-semibold'>Country / Region</label>
            <input
              type="text"
              name="country"
              placeholder='Country'
              value={formValues.country}
              onChange={handleInputChange}
              className='px-4 sm:px-6 border border-neutral-400 rounded-md w-full sm:w-[500px] h-[50px] sm:h-[75px]'
            />
            {formErrors.country && (
              <p className="text-sm text-red-500">Country is required.</p>
            )}
          </div>

          <div className='w-full sm:w-[530px] h-auto flex flex-col gap-2 sm:gap-4'>
            <label htmlFor="city" className='text-sm sm:text-lg font-semibold'>City</label>
            <input
              type="text"
              name="city"
              placeholder='City'
              value={formValues.city}
              onChange={handleInputChange}
              className='px-4 sm:px-6 border border-neutral-400 rounded-md w-full sm:w-[500px] h-[50px] sm:h-[75px]'
            />
            {formErrors.city && (
              <p className="text-sm text-red-500">City is required.</p>
            )}
          </div>

          <div className='w-full sm:w-[530px] h-auto flex flex-col gap-2 sm:gap-4'>
            <label htmlFor="province" className='text-sm sm:text-lg font-semibold'>Province Western Province</label>
            <input
              type="text"
              name="province"
              placeholder='Province Western Province'
              value={formValues.province}
              onChange={handleInputChange}
              className='px-4 sm:px-6 border border-neutral-400 rounded-md w-full sm:w-[500px] h-[50px] sm:h-[75px]'
            />
            {formErrors.province && (
              <p className="text-sm text-red-500">Province is required.</p>
            )}
          </div>

          <div className='w-full sm:w-[530px] h-auto flex flex-col gap-2 sm:gap-4'>
            <label htmlFor="zipCode" className='text-sm sm:text-lg font-semibold'>ZIP code</label>
            <input
              type="number"
              name="zipCode"
              placeholder='ZIP code'
              value={formValues.zipCode}
              onChange={handleInputChange}
              className='px-4 sm:px-6 border border-neutral-400 rounded-md w-full sm:w-[500px] h-[50px] sm:h-[75px]'
            />
            {formErrors.zipCode && (
              <p className="text-sm text-red-500">zip code is required.</p>
            )}
          </div>

          <div className='w-full sm:w-[530px] h-auto flex flex-col gap-2 sm:gap-4'>
            <label htmlFor="phone" className='text-sm sm:text-lg font-semibold'>Phone</label>
            <input
              type="number"
              name="phone"
              placeholder='Phone'
              value={formValues.phone}
              onChange={handleInputChange}
              className='px-4 sm:px-6 border border-neutral-400 rounded-md w-full sm:w-[500px] h-[50px] sm:h-[75px]'
            />
            {formErrors.phone && (
              <p className="text-sm text-red-500">phone is required.</p>
            )}
          </div>

          <div className='w-full sm:w-[530px] h-auto flex flex-col gap-2 sm:gap-4'>
            <label htmlFor="email" className='text-sm sm:text-lg font-semibold'>Email</label>
            <input
              type="email"
              name="email"
              placeholder='Email'
              value={formValues.email}
              onChange={handleInputChange}
              className='px-4 sm:px-6 border border-neutral-400 rounded-md w-full sm:w-[500px] h-[50px] sm:h-[75px]'
            />
            {formErrors.email && (
              <p className="text-sm text-red-500">email is required.</p>
            )}
          </div>
          <div className='w-full sm:w-[530px] h-auto flex flex-col gap-2 sm:gap-4'>
             <label htmlFor="additionalinformation"></label>
            <input
              type="text"
              name="additionalinformation"
              placeholder='Additional information'
              value={formValues.additionalinformation}
              onChange={handleInputChange}
              className='px-4 sm:px-6 border border-neutral-400 rounded-md w-full sm:w-[500px] h-[50px] sm:h-[75px]'
            />
          </div>


        </div>

    </div>
  )
}

export default CheckoutInputs
