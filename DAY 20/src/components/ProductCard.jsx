import React from "react";

function ProductCard({ product }) {
return ( <div className="group w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

  {/* Product Image */}
  <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gray-50 p-5">
    <img
      src={product.thumbnail}
      alt={product.title}
      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
    />

    {/* Discount Badge */}
    <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
      -{Math.round(product.discountPercentage)}% OFF
    </span>

    {/* Availability Badge */}
    <span
      className={`absolute right-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${
        product.availabilityStatus === "In Stock"
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {product.availabilityStatus}
    </span>
  </div>

  {/* Product Details */}
  <div className="p-5">
    <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-500">
      {product.category}
    </p>

    <h2 className="truncate text-lg font-bold text-gray-900">
      {product.title}
    </h2>

    <p className="mt-2 line-clamp-2 min-h-10 text-sm leading-5 text-gray-600">
      {product.description}
    </p>

    {/* Rating */}
    <div className="mt-3 flex items-center gap-2">
      <span className="text-lg text-yellow-400">★</span>
      <span className="text-sm font-semibold text-gray-800">
        {product.rating}
      </span>
      <span className="text-xs text-gray-500">
        ({product.reviews?.length || 0} reviews)
      </span>
    </div>

    {/* Price */}
    <div className="mt-4 flex items-center gap-2">
      <span className="text-2xl font-bold text-gray-900">
        ${product.price}
      </span>

      <span className="text-sm text-gray-400 line-through">
        $
        {(
          product.price /
          (1 - product.discountPercentage / 100)
        ).toFixed(2)}
      </span>
    </div>

    {/* Stock Information */}
    <p className="mt-2 text-xs text-gray-500">
      {product.stock > 0
        ? `${product.stock} items available`
        : "Out of stock"}
    </p>

    {/* Add to Cart Button */}
    <button
      disabled={product.stock === 0}
      className="mt-4 w-full rounded-xl bg-black px-4 py-3 font-semibold text-white transition-colors duration-300 hover:bg-gray-800 disabled:cursor-not-allowed disabled:bg-gray-400"
      onClick={() => console.log("Added to cart:", product.title)}
    >
      {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
    </button>
  </div>
</div>

);
}

export default ProductCard;
