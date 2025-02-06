"use client";

import { Product } from "../types/producttype";
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "@/components/actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";
import Footer from "@/components/Footer";


const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Fetch cart items on component mount
  useEffect(() => {
    const items = getCartItems();
    console.log("Fetched cart items:", items);  // Debug log to check fetched items
    setCartItems(items);
  }, []);

  // Remove item from cart with confirmation
  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire("Removed!", "Item has been removed from your cart.", "success");
      }
    });
  };

  // Handle stock quantity change
  // const handleQuantityChange = (id: string, quantity: number) => {
  //   if (quantity < 1) return;
  //   updateCartQuantity(id, quantity);
  //   setCartItems(getCartItems());
  // };

  // Increment quantity by 1
  const handleIncrement = (id: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item._id === id ? { ...item, stock: item.stock + 1 } : item
      );
       updateCartQuantity(id, updatedItems.find((item) => item._id === id)?.stock || 1);
      return updatedItems;
    });
  };

  // Decrement quantity by 1
  const handleDecrement = (id: string) => {
    setCartItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item._id === id && item.stock > 1 ? { ...item, stock: item.stock - 1 } : item
      );
      updateCartQuantity(id, updatedItems.find((item) => item._id === id)?.stock || 1);
      return updatedItems;
    });
  };

  // Calculate total price of cart items
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = Number(item.price) ;  // Ensure price is a valid number
      const quantity = Number(item.stock);  // Ensure stock is a valid number

      // Check for invalid values
      if (isNaN(price) || isNaN(quantity)) {
        console.error("Invalid price or stock for item:", item);
        return total;
      }

      return total + price * quantity;
    }, 0);
  };
 
  const handleProceed = () => {
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
             Swal.fire(
               "Success!",
               "Your order has been successfully processed!",
               "success"
             );
             // Clear the cart after proceeding (optional)
             setCartItems([]);
             
           }
         });
       };
  return (
    <>
    <div className="p-6 bg-gray-100 h-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item._id} className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md">
              <div className="flex items-center">
                {item.imagePath && (
                  <Image
                    src={urlFor(item.imagePath).url()}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.stock}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                      >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-xl font-bold text-gray-800">${calculateTotal().toFixed(2)}</p>
          </div>
          
          <button
           onClick={handleProceed}
           className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
           >
           Proceed
         </button>
          
        </div>
      )}
    </div>
      <Footer />
      </>
  );
};

export default CartPage;
