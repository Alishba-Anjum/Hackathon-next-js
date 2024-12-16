import Image from 'next/image';
import React from 'react';


const Home3 = ({
  bgPicture,
  text,
  price,
}: {
  bgPicture: string;
  text: string;
  price: string;
}) => {
  return (
    <div className="flex h-auto flex-col items-center gap-3 sm:gap-4 w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] p-2 sm:p-4">
    
     <a href="/single-product">
     <Image
        src={bgPicture}
        alt="sofa"
        height={384}
        width={600}
        className="w-full h-auto rounded-md object-cover"
      /></a>
      
      <div className="text-center">
        <p className="text-sm sm:text-base md:text-lg font-medium">{text}</p>
        <p className="text-lg sm:text-xl md:text-2xl font-semibold">{price}</p>
      </div>
    </div>
  );
};

export default Home3;
``




