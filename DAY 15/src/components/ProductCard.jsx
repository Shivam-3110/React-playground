import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
  let navigate = useNavigate()
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-md transition hover:-translate-y-1 hover:shadow-xl">
      
      {/* Product Image */}
      <div onClick={() => navigate(`/detail/${product.id}`)} className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-cover transition duration-300 hover:scale-105"
        />

        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute left-3 top-3 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold text-white">
            {product.discount}% OFF
          </span>
        )}

        {/* Wishlist */}
        <button className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-700 shadow hover:text-red-500">
          ♡
        </button>
      </div>

      {/* Product Details */}
      <div className="p-5">
        <p className="mb-1 text-sm text-gray-500">
          {product.category}
        </p>

        <h2 className="mb-2 text-lg font-semibold text-gray-800">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <span className="text-yellow-500">★</span>
          <span className="text-sm font-medium text-gray-700">
            {product.rating.rate}
          </span>
          <span className="text-sm text-gray-400">
            ({product.reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="mb-4 flex items-center gap-3">
          <span className="text-2xl font-bold text-gray-900">
            ₹{product.price}
          </span>

          {product.oldPrice && (
            <span className="text-sm text-gray-400 line-through">
              ₹{product.oldPrice}
            </span>
          )}
        </div>

        {/* Add to Cart */}
        <button className="w-full rounded-xl bg-black py-3 font-medium text-white transition hover:bg-gray-800 active:scale-95">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
