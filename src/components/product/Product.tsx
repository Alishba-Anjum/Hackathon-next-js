'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import Link from 'next/link';



interface Product {
  _id: string;
  name: string;
  price: string;
  discountPercentage: number;
  imagePath: string;
  stockLevel: number;
  category: string;
}

const fetchProducts = async (): Promise<Product[]> => {
  return client.fetch(
    `*[_type == 'product']{
      _id,
      name,
      price,
      discountPercentage,
      "imagePath": imagePath.asset->url,
      stockLevel,
      category
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
      updatedProducts.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
    } else if (sortOption === 'price-desc') {
      updatedProducts.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
    } else if (sortOption === 'name-asc') {
      updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOption === 'name-desc') {
      updatedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }

    // Limit number of products to show
    setFilteredProducts(updatedProducts.slice(0, productsToShow));
  }, [categoryFilter, sortOption, productsToShow, products]);

  // if (loading) {
  //   return <p>Loading products...</p>;
  // }

  return (
    <>
{/* Filters Section */}
<div className="h-auto w-full bg-pink mt-16 flex flex-col lg:flex-row items-center lg:items-center justify-between gap-6 lg:gap-0 px-4 md:px-16 lg:px-28 py-4">
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
              <option value="sofa">sofa</option>
              <option value="table">table</option>
              <option value="bed">bed</option>
              
            </select>
          </span>
        </div>

        {/* Right Section */}
        <div className="flex flex-wrap gap-4 md:gap-8 items-center">
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
            <div key={product._id} className="product bg-white p-4 rounded-lg shadow">
              <img
                src={product.imagePath || '/default-image.jpg'}
                alt={product.name || 'Unnamed product'}
                className="w-full h-40 object-cover mb-4"
              />
              <h2 className="font-bold text-lg">{product.name || 'No Name'}</h2>
              <p className="text-gray-600">${product.price || 'N/A'}</p>
              <p className="text-green-600">
                Discount: {product.discountPercentage ?? 0}%
              </p>
              <p className="text-gray-500">
                Stock Level: {product.stockLevel ?? 'Out of Stock'}
              </p>
              <p className="text-gray-400">
                Category: {product.category || 'Uncategorized'}
                <Link href={`/shop/${product._id}`}>View Product</Link>
              </p>
            </div>
          ))
        ) : (
          <p>No products available</p>
        )}
      </div>

    </>
  );
}

export default Product;