import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Homepage2 = ({ heading, linkText, bgImage }
    : {
        heading: string,
        linkText: string,
        bgImage: string

    }
) => {
    return (
        <div className='h-[300px] w-[600px] flex flex-col md:h-[300px] relative p-2 gap-2'>
            {/* Image Section */}
            <div className='w-full h-[600px] lg:w-1/2 flex justify-center'>
                <Image
                    src={bgImage}
                    alt='table'
                    height={700}
                    width={1092}
                    className='rounded-lg object-cover h-[300px] w-full  '
                />
            </div>
            {/* Content Section */}
            <div className='w-full lg:w-1/2 flex flex-col  lg:items-start gap-6  lg:text-left'>
                <h1 className='text-2xl md:text-3xl lg:text-4xl font-semibold'>{heading}</h1>
                <Link
                    href="#"
                    className="text-lg md:text-xl border-b-2 border-black w-[100px] h-[40px] hover:text-gray-700">
                    {linkText}
                </Link>
            </div>
        </div>
    );
};

export default Homepage2;




