"use client";

import { addToCart } from "@/components/actions/actions";
import Swal from "sweetalert2";
import { Product } from "@/app/types/producttype";

export default function AddToCartButton({ product }: { product: Product }) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${product.name} added to cart`,
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <button
      onClick={handleAddToCart}
      className="bg-green-500 text-black py-2 px-4 w-[200px] font-semibold rounded hover:scale-105 transition transform duration-300 ease-in-out"
    >
      Add to Cart
    </button>
  );
}

