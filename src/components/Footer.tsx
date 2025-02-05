import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white flex flex-col  items-center ">

      <div className="w-full max-w-[1131px] flex flex-col lg:flex-row gap-12 lg:gap-24 items-start justify-between border-b-2 py-8 px-6">

        <div className="w-full text-gray-400 text-center md:items-center max-sm:items-center lg:text-left">
          <p className="flex flex-col gap-1">
            400 University Drive Suite 200 Coral
            <span>Gables, FL 33134 USA</span>
          </p>
        </div>

        {/* Links */}
        <div className="w-full flex flex-col md:items-center  max-sm:items-center sm:items-center  gap-4">
          <h1 className="text-gray-400">Links</h1>
          <Link href="/" className="font-semibold hover:text-yellow-600">
            Home
          </Link>
          <Link href="/about" className="font-semibold hover:text-yellow-600">
            About
          </Link>
          <Link href="/contact" className="font-semibold hover:text-yellow-600">
            Contact
          </Link>
          <Link href="/shop" className="font-semibold hover:text-yellow-600">
            Shop
          </Link>
        </div>


        <div className="w-full flex flex-col gap-4 md:items-center max-sm:items-center sm:items-center ">
          <h1 className="text-gray-400">Help</h1>
          <span className="font-semibold">Payment Options</span>
          <span className="font-semibold">Returns</span>
          <span className="font-semibold">Privacy Policies</span>
        </div>


        <div className="w-full flex flex-col items-center md:items-center max-sm:items-center lg:items-start gap-4">
          <h1 className="text-gray-400">Subscribe</h1>
          <div className="flex gap-4">
            <input
              type="text"
              placeholder="Enter Your Email Address"
              className="border-b-2 border-black w-[200px] lg:w-[300px] px-2 py-1"
            />
            <button className="font-semibold border-b-2 border-black hover:text-yellow-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>


      <p className="text-center py-4 text-sm  lg:text-base">
        2022 Meubel House. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;






