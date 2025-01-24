// CartPage.tsx
"use client";
import { useState, useEffect } from "react";
import { MdCancel } from "react-icons/md";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

const CartPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // Retrieve cart items from localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem("cartItems");
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  // Remove an item from the cart
  const removeItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart)); // Update cart in localStorage
  };

  return (
    <>
      <Header />
      <div className="w-full flex flex-col items-center gap-4">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <div>
          {cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <div key={index} className="flex justify-between p-4">
                <div className="flex gap-8 items-center">
                  <Image src="/cart1.png" alt="" height={105} width={108} />
                  <div className="flex flex-col items-center gap-2">
                    <h1 className="text-sm">{item.name}</h1>
                    <pre className="text-sm text-yellow-700">
                      {item.quantity} X Rs. {item.price.toLocaleString()}
                    </pre>
                  </div>
                  <MdCancel onClick={() => removeItem(index)} />
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">Your cart is empty</p>
          )}
        </div>

        {cartItems.length > 0 && (
          <>
            <div className="flex justify-between px-6 py-4 w-full">
              <h1>Subtotal</h1>
              <h1 className="text-yellow-700">
                Rs.{" "}
                {cartItems
                  .reduce((total, item) => total + item.price * item.quantity, 0)
                  .toLocaleString()}
              </h1>
            </div>

            <div className="flex items-center gap-11 mt-5">
              <Link href="/cart">
                <button className="w-[150px] h-[31px] rounded-2xl border border-black hover:bg-lightYellow">
                  View Cart
                </button>
              </Link>
              <Link href="/checkout">
                <button className="w-[150px] h-[31px] rounded-2xl border border-black hover:bg-lightYellow">
                  Check out
                </button>
              </Link>
            </div>
          </>
        )}
      </div>

      <Footer />
    </>
  );
};

export default CartPage;
