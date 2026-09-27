
import React from "react";

function Cartcard({ product }) {
  return (
    <div className="flex items-center gap-5 rounded-xl border border-gray-200 bg-white p-4 shadow-sm">

      {/* Product Image */}
      <div className="flex h-28 w-28 shrink-0 items-center justify-center rounded-lg bg-gray-100 p-3">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain"
        />
      </div>

      {/* Product Details */}
      <div className="flex flex-1 flex-col gap-2">
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        <p className="text-lg font-bold text-gray-900">
          ${product.price}
        </p>

        {/* Quantity */}
        <div className="flex items-center gap-3">
          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-gray-100">
            −
          </button>

          <span className="font-medium">
            1
          </span>

          <button className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-lg hover:bg-gray-100">
            +
          </button>
        </div>
      </div>

      {/* Remove */}
      <button className="self-start text-sm font-medium text-red-500 hover:text-red-600">
        Remove
      </button>

    </div>
  );
}

export default Cartcard;




