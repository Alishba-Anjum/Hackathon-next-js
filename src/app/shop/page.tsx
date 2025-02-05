'use client';
import Footer from '@/components/Footer';
import Page2 from '@/components/Page2';
import Mini from '@/components/Mini';
import Product from '@/components/product/Product';

const Shop = () => {
  
  return (
    <div className="h-fit w-full">
      
      <Page2 heading="Shop" link="Shop" />
      <Product />

      
      <div className='lg:h-[200px] h-auto w-full flex flex-col lg:flex-row gap-11 bg-pink items-center justify-center'>
         <Mini heading='Free Delivery' para='For all oders over $50, consectetur adipim scing elit.' />
         <Mini heading='90 Days Return' para='If goods have problems, consectetur adipim scing elit.' />
         <Mini heading='Secure Payment' para='100% secure payment, consectetur adipim scing elit.' />

       </div>
       <Footer/>
    </div>
  );
};

export default Shop;

