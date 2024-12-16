"use client"
import Header from '@/components/Header'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import Footer from '@/components/Footer';
import Home3 from '@/components/Home3';
import Link from 'next/link';
import { MdCancel } from "react-icons/md";

interface CartItem {
    name: string;
    price: number;
    quantity: number;
}


const SingleProduct = () => {
    const [count, setCount] = useState<number>(1);
    const [isCartVisible, setIsCartVisible] = useState<boolean>(false);
    const [cartItems, setCartItems] = useState<CartItem[]>([]);
    
    const toggleCart = () => {
        setIsCartVisible(!isCartVisible);
    };
    const addToCart = (item: CartItem) => {
        setCartItems((prevItems) => [...prevItems, item]);
        setIsCartVisible(true);
    };
    
    return (
        <>
            <Header />
            {/* Overlay for cart */}
            {isCartVisible && (
                <div className="cart-overlay" onClick={() => setIsCartVisible(false)}></div>
            )}

            {/* Cart */}
            <div
                className={`w-[417px] h-[546px] bg-pink flex flex-col justify-between border absolute top-0 right-0 z-20 ${isCartVisible ? 'flex' : 'hidden'
                    }`}
            >
                <div>
                    <div className='flex justify-between px-6 py-4'>
                        <h1 className='text-2xl font-bold'>Shopping Cart</h1>
                        <Image src="/lock.png" alt='' height={9} width={20.66} />
                    </div>
                    <hr className='w-[80%] m-auto' />
                    <div>
                        {cartItems.length > 0 ? (
                            cartItems.map((item, index) => (
                                <div key={index} className='flex justify-between p-4'>
                                    <div className='flex gap-8 items-center'>
                                        <Image src="/cart1.png" alt='' height={105} width={108} />
                                        <div className='flex flex-col items-center gap-2'>
                                            <h1 className='text-sm'>{item.name}</h1>
                                            <pre className='text-sm text-yellow-700'>
                                                {item.quantity} X Rs. {item.price.toLocaleString()}
                                            </pre>
                                        </div>
                                        <MdCancel onClick={() => setCartItems(cartItems.filter((_, i) => i !== index))} />
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p className='text-center text-gray-500'>Your cart is empty</p>
                        )}
                    </div>
                </div>
                <div>
                    <div className='flex gap-32 px-6'>
                        <h1>Subtotal</h1>
                        <h1 className='text-yellow-700'>
                            Rs. {cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toLocaleString()}
                        </h1>
                    </div>
                    <hr />
                    <div className='flex items-center gap-11 mt-5'>
                        <a href="/cart">
                            <button className='w-[150px] h-[31px] rounded-2xl border border-black hover:bg-lightYellow'>View Cart</button>
                        </a>
                        <a href="/checkout">
                            <button className='w-[150px] h-[31px] rounded-2xl border border-black hover:bg-lightYellow'>Check out</button>
                        </a>
                    </div>
                </div>
            </div>
            {/* Cart end */}

            <div className='w-full flex flex-wrap items-center gap-2 max-sm:mb-6 max-sm:gap-8 md:gap-6 px-4 md:px-28'>
                <h1 className='text-gray-400'>Home</h1>
                <Image src="/arrow.png" alt="arrow" height={8} width={14} />
                <h1 className='text-gray-400'>Shop</h1>
                <h1 className='text-xl text-gray-500'>|</h1>
                <h2 className='text-lg font-semibold'>Asgaard sofa</h2>
            </div>

            <div className='flex flex-wrap lg:flex-nowrap h-auto w-full px-4 md:px-28'>
                <div className='w-full lg:w-[553px] h-auto flex justify-center lg:justify-start'>
                    <div className='w-[76px] h-auto flex flex-col gap-7'>
                        <Image src="/single1.png" alt='' height={80} width={76} />
                        <Image src="/single2.png" alt='' height={80} width={76} />
                        <Image src="/single3.png" alt='' height={80} width={76} />
                        <Image src="/single4.png" alt='' height={80} width={76} />
                    </div>
                    <div className='w-auto h-auto'>
                        <Image src="/single5.png" alt='' height={500} width={423} />
                    </div>
                </div>

                <div className='w-full lg:w-[606.01px] flex flex-col gap-2 mt-6 lg:mt-0'>
                    <h1>Asgaard sofa</h1>
                    <h2 className='text-gray-400'>Rs. 250,000.00</h2>
                    <div className='flex items-center gap-4'>
                        <Image src="/stars.png" alt='' height={20} width={127} />
                        <h1 className='text-xl text-gray-400'>|</h1>
                        <h1 className='text-gray-400 text-sm'>5 Customer Review</h1>
                    </div>
                    <p>Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>

                    <div className='h-[63px] w-[123px]'>
                        <h1 className='text-gray-400'>Size</h1>
                        <button className='w-[30px] h-[30px] text-sm bg-lightYellow rounded'>L</button>
                        <button className='w-[30px] h-[30px] text-sm bg-lightGray rounded ml-4'>XL</button>
                        <button className='w-[30px] h-[30px] text-sm bg-lightGray rounded ml-4'>XS</button>
                    </div>

                    <div className='h-[63px] w-[123px]'>
                        <h1 className='text-gray-400'>Color</h1>
                        <button className='w-[30px] h-[30px] text-sm bg-purple-700 rounded-full'></button>
                        <button className='w-[30px] h-[30px] text-sm bg-black rounded-full ml-4'></button>
                        <button className='w-[30px] h-[30px] text-sm bg-yellow-800 rounded-full ml-4'></button>
                    </div>

                    <div className='flex gap-11'>
                        <div className='w-[123px] h-[64px] border border-black rounded-xl flex gap-8 items-center px-2'>
                            <button
                                className='w-[9px] h-[24px] text-[20px]'
                                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                            >
                                -
                            </button>
                            <h1>{count}</h1>
                            <button
                                className='w-[11px] h-[24px] text-xl'
                                onClick={() => setCount(count + 1)}
                            >
                                +
                            </button>
                        </div>
                        <button
                            onClick={() =>
                                addToCart({ name: 'Asgaard sofa', price: 250000, quantity: count })
                            }
                            className="w-[150px] h-[64px] rounded-2xl border border-black hover:bg-lightYellow"
                        >
                            Add To Cart
                        </button>
                    </div>

                    <hr className='mt-11 mb-11' />
                    <div className='w-full flex gap-6 text-gray-400'>
                        <span className='flex flex-col gap-4'>
                            <h1>SKU</h1>
                            <h1>Category</h1>
                            <h1>Tags</h1>
                            <h1>Share</h1>
                        </span>
                        <span className='flex flex-col gap-4'>
                            <h1>:</h1>
                            <h1>:</h1>
                            <h1>:</h1>
                            <h1>:</h1>
                        </span>
                        <span className='flex flex-col gap-4'>
                            <h1>SS001</h1>
                            <h1>Sofas</h1>
                            <h1>Sofa, Chair, Home, Shop</h1>
                            <div className='flex gap-4'>
                                <FaFacebookSquare />
                                <FaLinkedin />
                                <FaTwitterSquare />
                            </div>
                        </span>
                    </div>
                </div>
            </div>

            <hr />




            <div className='h-auto w-[90%] md:w-[80%] flex flex-col gap-6 items-center mx-auto py-6'>
                <div className='w-full flex flex-wrap justify-center gap-6'>
                    <h1 className='text-center'>Description</h1>
                    <h1 className='text-gray-400 text-center'>Additional Information</h1>
                    <h1 className='text-gray-400 text-center'>Reviews [5]</h1>
                </div>
                <p className='text-gray-400 text-sm md:text-base'>
                    Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                </p>
                <p className='text-gray-400 text-sm md:text-base'>
                    Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                </p>
                <div className='w-full flex flex-wrap gap-4 justify-center'>
                    <div className='w-full md:w-[48%] h-auto rounded bg-lightYellow'>
                        <Image src="/single6.png" alt='' height={348} width={605} />
                    </div>
                    <div className='w-full md:w-[48%] h-auto rounded bg-lightYellow'>
                        <Image src="/single7.png" alt='' height={348} width={605} />
                    </div>
                </div>
            </div>

            <div className='lg:h-[777px] max-md:h-auto h-auto w-full flex flex-col items-center justify-center gap-11 bg-white'>
                <div className='h-auto flex flex-col items-center justify-center gap-4 md:gap-6 lg:gap-8 p-4'>
                    <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>Related Products</h1>
                </div>
                <div className='lg:h-[372px] h-auto w-full flex flex-wrap items-center justify-center gap-6 px-4'>
                    <Home3 bgPicture='/homethree1.png' text='Trenton modular sofa_3' price='Rs. 25,000.00' />
                    <Home3 bgPicture='/homethree2.png' text='Granite dining table w dining chair' price='Rs. 25,000.00' />
                    <Home3 bgPicture='/homethree3.png' text='Outdoor bar table and stool' price='Rs. 25,000.00' />
                    <Home3 bgPicture='/homethree4.png' text='Plain console with teak mirror' price='Rs. 25,000.00' />
                </div>
                <Link
                    href="/shop"
                    className='text-center h-[40px] w-auto px-4 md:px-6 font-semibold text-sm md:text-lg border-b-2 border-black hover:text-gray-600'>
                    View More
                </Link>
            </div>
            <Footer />
        </>
    )
}

export default SingleProduct;



