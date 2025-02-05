'use client'
import type { Product } from "@/app/types/producttype";
import { addToCart } from "@/components/actions/actions";
import Footer from "@/components/Footer";
import Home3 from "@/components/home/Home3";
import { client } from "@/sanity/lib/client";
import { log } from "console";
import { groq } from "next-sanity";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Swal from "sweetalert2";



interface ProductPageProps {
  params: { slug: string };
}

async function fetchProductBySlug(slug: string): Promise<Product | null> {
  return client.fetch(
    groq`*[_type == 'product' && slug.current == $slug][0] {
      _id,
      name,
      price,
      "slug": slug.current,
      discountPercentage,
      "imagePath": imagePath.asset->url,
      stockLevel,
      category,
      description
    }`,
    { slug }
  );
}



export default async function ProductDetails({ params }: ProductPageProps) {
  const { slug } = params;
  const product = await fetchProductBySlug(slug);

  if (!product) {
    return <p>Product not found</p>;
  }

  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title:  `${product.name} added to cart`, 
      showConfirmButton: false, 
      timer: 1500,
    });
    
  }

  return (<>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Image */}
        <div>
          {product.imagePath && (
            <Image
              src={product.imagePath}
              alt={product.name}
              width={400}
              height={400}
              className="w-full h-auto object-cover rounded-lg bg-white"
            />
          )}
        </div>

        {/* Product Details */}
        <div className="flex flex-col space-y-4 justify-center">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl font-semibold text-gray-700">
            Price: {product.price}
          </p>
          <p className="text-lg text-green-600">
            Discount: {product.discountPercentage || 0}%
          </p>
          <p className="text-lg text-gray-500">
            Stock: {product.stock > 0 ? product.stock : "Out of Stock"}
          </p>
          <p className="text-md text-gray-700 font-semibold">{product.description}</p>


          <button onClick={(e)=> handleAddToCart(e, product)} className="bg-green-500 text-black py-2 px-4 w-[200px]  font-semibold rounded hover:scale-105 transition transform duration-300 ease-in-out ">Add to Cart</button>
        </div>
      </div>
    </div>

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
    <Footer />
  </>
  );
}

