import React from "react";

const ProductCard = ({product}) => {

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

        {/* Product Image */}
        <div className="flex h-64 items-center justify-center bg-white p-6">
          <img
            src={product.image}
            alt={product.title}
            className="h-full w-full object-contain transition duration-300 hover:scale-110"
          />
        </div>

        {/* Product Details */}
        <div className="p-5">

          {/* Category */}
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold capitalize text-indigo-700">
            {product.category}
          </span>

          {/* Title */}
          <h2 className="mt-4 line-clamp-2 min-h-14 text-lg font-bold text-gray-800">
            {product.title}
          </h2>

          {/* Rating */}
          <div className="mt-3 flex items-center gap-2">
            <div className="flex items-center gap-1 text-yellow-500">
              <span>★</span>
              <span className="font-semibold">{product.rating.rate}</span>
            </div>

            <span className="text-sm text-gray-500">
              ({product.rating.count} reviews)
            </span>
          </div>

          {/* Description */}
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-gray-500">
            {product.description}
          </p>

          {/* Price and Button */}
          <div className="mt-5 flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500">Price</p>
              <p className="text-2xl font-extrabold text-gray-900">
                ${product.price.toFixed(2)}
              </p>
            </div>

            <button
              onClick={() => alert("Product added to cart!")}
              className="rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700 active:scale-95"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;