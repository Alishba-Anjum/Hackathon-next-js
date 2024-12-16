import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Home5 = ({ image }: { image: string }) => {
    return (
        <div className='flex flex-col gap-4 w-full max-w-sm md:max-w-md lg:max-w-lg mx-auto'>
            <Image src={image} alt='Blog image' width={393} height={393} className='w-full h-auto' />
            <div className='flex flex-col gap-4 items-center md:items-start'>
                <p className='text-base md:text-lg lg:text-xl text-center md:text-left'>
                    Going all-in with millennial design
                </p>
                <Link
                    href="/blog"
                    className='h-[40px] px-4 py-2 font-semibold text-base md:text-lg border-b-2 border-black'
                >
                    Read More
                </Link>
                <div className='flex flex-wrap gap-2 justify-center md:justify-start text-sm md:text-base'>
                    <span className='flex items-center gap-2'>
                        <Image src="/clock.png" alt='clock icon' width={22} height={22} /> 5 min
                    </span>
                    <span className='flex items-center gap-2'>
                        <Image src="/calender.png" alt='calendar icon' width={22} height={22} /> 12th Oct 2022
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Home5;




