"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Page2 from '@/components/Page2'
import React from 'react'
import Mini from '@/components/Mini'
import Footer from '@/components/Footer'
import { Product } from "../types/producttype";
import { getCartItems } from "@/components/actions/actions";

import Swal from "sweetalert2";
import { client } from "@/sanity/lib/client";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/sanity/lib/firebase";
import { useRouter } from "next/navigation";


const Checkout = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const [discount, setDiscount] = useState<number>(0);
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
    country: false,
  });
  useEffect(() => {
    setCartItems(getCartItems());
    const appliedDiscount = localStorage.getItem("appliedDiscount");
    if (appliedDiscount) {
      setDiscount(Number(appliedDiscount));
    }
  }, []);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.stock,
    0
  );
  const total = Math.max(subtotal - discount, 0);

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
      country: !formValues.country,
    };

    console.log("Form Values:", formValues);
    console.log("Errors Object:", errors);

    setFormErrors(errors);
    return Object.values(errors).every((error) => !error);
  };

useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });
}, []);

 const router = useRouter();
  const handlePlaceOrder = async () => {
    if(isLoggedIn){
      Swal.fire({
        title: "Processing your order...",
        text: "Please wait a moment.",
        icon: "info",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Proceed",
      }).then((result) => {
        if (result.isConfirmed) {
          const isValid = validateForm();
          if (isValid) {
            localStorage.removeItem("appliedDiscount");
            Swal.fire(
              "Success!",
              "Your order has been successfully processed!",
              "success"
            );
  
          } else {
            Swal.fire(
              "Error",
              "Please fill in all the required fields.",
              "error"
            )
          }
  
        }
      });
      const orderdata = {
        _type: 'order',
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        email: formValues.email,
        address: formValues.address,
        city: formValues.city,
        zipCode: formValues.zipCode,
        phone: formValues.phone,
        country: formValues.country,
        cartItems: cartItems?.map((item) => ({
          _type: 'reference',
          _ref: item._id
        })) || [],
        total: Number(total) || 0,
        discount: Number(discount) || 0,
        orderDate: new Date().toISOString(),
        status: "pending"
      };
      
      try {
        await client.create(orderdata);
        if (localStorage.getItem('appliedDiscount')) {
          localStorage.removeItem('appliedDiscount');
        }
      } catch (error) {
        console.error('Error creating order:', error);
        alert('Failed to place order. Please try again.');
      }
    }else{
      router.push('/signup');
    }  
    }
    
  
  return (
    <>
      <Page2 heading='Check out' link='Checkout' />
      <div className='h-auto w-full flex flex-col lg:flex-row  gap-6 lg:gap-44 p-4 lg:p-0  md:px-16'>
        {/* left section */}
          <div>
          <div className='h-auto flex flex-col  py-6 md:px-32 lg:py-11 w-full lg:w-[608px]'>
            <h1 className='text-2xl lg:text-3xl font-semibold'>Billing details</h1>
            <div className='w-full lg:w-[530px] flex flex-row lg:flex-row gap-8 lg:gap-24'>

              {/* form input */}
              <div className='w-[230px] lg:w-[200px]'>
                <label htmlFor="firstName" id='firstname' className='font-semibold text-lg'>First Name</label>
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
              <label htmlFor="address" className='text-sm sm:text-lg font-semibold'>Address</label>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formValues.address}
                onChange={handleInputChange}
                className='px-4 sm:px-6 border border-neutral-400 rounded-md w-full sm:w-[500px] h-[50px] sm:h-[75px]'
              />
              {formErrors.address && (
                <p className="text-sm text-red-500">address is required.</p>
              )}
            </div>

            <div className='w-full sm:w-[530px] h-auto flex flex-col gap-2 sm:gap-4'>
              <label htmlFor="country" className='text-sm sm:text-lg font-semibold'>Country</label>
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
              <label htmlFor="zipCode" className='text-sm sm:text-lg font-semibold'>ZIP code</label>
              <input
                type="text"
                name="zipCode"  // Ensure it matches the form state
                placeholder="ZIP code"
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
                type="text"
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



          </div>

      </div>
       
      {/* right section */}
      <div className='h-auto w-full lg:w-[608px] flex  py-24  '>
        <div>
          <div className='h-auto w-full lg:w-[533px] flex flex-col gap-4  max-sm:items-center '>

            <div className="bg-white border rounded-lg p-6 space-y-4">
              <h2 className="text-lg font-semibold mb-4 text-center text-yellow-700">Product Detail</h2>
              {cartItems.length > 0 ? (
                cartItems.map((item) => (
                  <div
                    key={item._id}
                    className="flex items-center gap-4 py-3 border-b"
                  >
                    <div className="w-16 h-16 rounded overflow-hidden">
                      {item.imagePath && (
                        <Image
                          src={item.imagePath}
                          alt={item.name}
                          width={64}
                          height={64}
                          className="object-cover w-full h-full"
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-medium">{item.name}</h3>
                      <p className="text-xs text-gray-500">
                        Quantity: {item.stock}
                      </p>
                    </div>
                    <p className="text-sm font-medium">
                      ${item.price * item.stock}
                    </p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">Your cart is empty.</p>
              )}
              <div className="text-right pt-4">
                <div className="flex justify-between px-4">
                  <p className="font-bold">  Subtotal:</p>
                  <p className="font-medium">
                    ${subtotal}
                  </p>
                </div>
                <div className="flex justify-between px-4">
                  <p className="font-semibold">Discount:</p>
                  <p className="font-medium">
                    -${discount}
                  </p>
                </div>
                <div className="flex justify-between px-4 text-xl font-semibold">
                  <p>Total</p>
                  <p className="text-lg font-semibold text-yellow-700">
                    ${total.toFixed(2)}
                  </p>
                </div>
              </div>
            </div>
          </div>
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
            <button onClick={handlePlaceOrder}
              className="w-full lg:w-[237px] sm:w-[200px] max-sm:w-[200px] h-[48px] rounded-2xl text-sm lg:text-lg border border-black hover:bg-yellow-700">
              Place Order

            </button>
          </div>
        </div>
      </div>
      <div>

      </div>
</div>


      <div className='h-[300px] w-full flex flex-wrap gap-11 bg-pink items-center justify-center'>
        <Mini heading='Free Delivery' para='For all oders over $50, consectetur adipim scing elit.' />
        <Mini heading='90 Days Return' para='If goods have problems, consectetur adipim scing elit.' />
        <Mini heading='Secure Payment' para='100% secure payment, consectetur adipim scing elit.' />

      </div>
      <Footer />

    </>
  );
};


export default Checkout;
