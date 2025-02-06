"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Page2 from '@/components/Page2'
import React from 'react'
import Mini from '@/components/Mini'
import Footer from '@/components/Footer'
import { Product } from "../types/producttype";
import { getCartItems } from "@/components/actions/actions";
import CheckoutInputs from "@/components/CheckoutInputs";

const Checkout = () => {
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
    province: false,    
    country: false,   
    additionalinformation: false 
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
      province: !formValues.province, 
      country: !formValues.country, 
      additionalinformation: !formValues.additionalinformation 
    };
  
  
  
    console.log("Form Values:", formValues);  // Debugging
    console.log("Errors Object:", errors);  // Debugging
  
    setFormErrors(errors);
    
    return Object.values(errors).every((error) => !error);
  };
  

  const handlePlaceOrder = () => {
    if (validateForm()) {
      localStorage.removeItem("appliedDiscount");
      //   toast.success("Order placed successfully!");
    } else {
      //   toast.error("Please fill in all the fields.");
    }
  };
  return (
    <>
      <Page2 heading='Check out' link='Checkout' />
      <div className='h-auto w-full flex flex-col lg:flex-row  gap-6 lg:gap-44 p-4 lg:p-0  md:px-16'>
        {/* left section */}
        <CheckoutInputs />

        {/* right section */}
        <div className='h-auto w-full lg:w-[608px] flex  py-24  '>
          <div className='h-auto w-full lg:w-[533px] flex flex-col gap-4  max-sm:items-center '>
            <div>
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
              <div>
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
