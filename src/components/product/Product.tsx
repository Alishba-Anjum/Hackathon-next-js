'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';
import type { Product } from '@/app/types/producttype';
import { addToCart } from '../actions/actions';
import Swal from 'sweetalert2';

const fetchProducts = async (): Promise<Product[]> => {
  return client.fetch(
    `*[_type == 'product']{
      _id,
      name,
      price,
      discountPercentage,
      "imagePath": imagePath.asset->url,
      stockLevel,
      category,
      description,
      "slug": slug.current 
      
    }`
  );
};

const Product = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [categoryFilter, setCategoryFilter] = useState<string>('All');
  const [sortOption, setSortOption] = useState<string>('default');
  const [productsToShow, setProductsToShow] = useState<number>(16);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        console.log('Fetched Products:', fetchedProducts); 
        setProducts(fetchedProducts);
        setFilteredProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    getProducts();
  }, []);
  const handleAddToCart = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    addToCart(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });

  }
  useEffect(() => {
    let updatedProducts = [...products];

    // Filter by category
    if (categoryFilter !== 'All') {
      updatedProducts = updatedProducts.filter(
        (product) => product.category === categoryFilter
      );
    }

    // Sort products
    if (sortOption === 'price-asc') {
      updatedProducts.sort((a, b) => (a.price) - (b.price));
    } else if (sortOption === 'price-desc') {
      updatedProducts.sort((a, b) => (b.price) - (a.price));
    } else if (sortOption === 'name-asc') {
      updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name-desc') {
      updatedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Limit number of products to show
    setFilteredProducts(updatedProducts.slice(0, productsToShow));
  }, [categoryFilter, sortOption, productsToShow, products]);

  if (loading) {
    return <p>Loading products...</p>;
  }

  return (
    <>
      {/* Filters Section */}
      <div className="h-auto w-full bg-pink mt-16 flex flex-col lg:flex-row items-center  max-sm:justify-center lg:items-center justify-between gap-6 lg:gap-0 md:px-16 lg:px-28 py-4">
        {/* Left Section */}
        <div className="flex flex-wrap gap-4 items-center">
          <span className="flex items-center gap-2">
            <Image src="/filter.png" alt="filter" width={25} height={25} />
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded"
            >
              <option value="All">All Categories</option>
              <option value="chair">Chair</option>
              <option value="sofa">Sofa</option>
              <option value="table">Table</option>
              <option value="bed">Bed</option>
            </select>
          </span>
        </div>

        {/* Right Section */}
        <div className="flex lg:flex-row max-sm:flex-col  gap-4 md:gap-8 items-center">
          <span className="flex items-center gap-2 md:gap-4">
            <h1 className="text-base md:text-lg">Show</h1>
            <input
              type="number"
              value={productsToShow}
              onChange={(e) => setProductsToShow(Number(e.target.value))}
              className="w-[60px] h-[40px] px-3 border border-gray-300 rounded"
            />
          </span>
          <span className="flex items-center gap-2 md:gap-4">
            <h1 className="text-base md:text-lg">Sort by</h1>
            <select
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
              className="border border-gray-300 px-3 py-2 rounded"
            >
              <option value="default">Default</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </span>
        </div>
      </div>

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-16 lg:px-28 py-6">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <Link href={`/product/${product.slug}`} key={product._id}>
              <div className="product bg-white p-4 rounded-lg shadow-lg flex flex-col gap-2">
                <Image
                  src={product.imagePath || '/default-image.jpg'}
                  alt={product.name || 'Unnamed product'}
                  width={500}
                  height={500}
                  className="w-full h-40 object-cover mb-4"
                />
                <h2 className="font-bold text-lg">{product.name || 'No Name'}</h2>
                <p className="text-gray-600 font-semibold">${product.price || 'N/A'}</p>
                <p className="text-gray-400">
                  Category: {product.category || 'Uncategorized'}
                </p>
                
                <button 
                onClick={(e) => handleAddToCart(e, product)}
                 className=" bg-orange-200 hover:bg-yellow-700 text-black py-2 px-4 w-[150px]  rounded hover:scale-105 transition transform duration-300 ease-in-out ">
                  Add to Cart
                  </button>
              </div>
            </Link>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>
    </>
  );
};

export default Product;