import React from "react";

function Cart({ cartItems }) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price ,
    0
  );
  
  const deliveryFee = subtotal > 500 ? 0 : 50;
  const total = subtotal + deliveryFee;

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 sm:px-8 lg:px-16">
      
      {/* Heading */}
      <div className="mx-auto max-w-7xl">
        <h1 className="text-3xl font-bold text-gray-900">
          Shopping Cart
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          {cartItems.length} items in your cart
        </p>
      </div>

      {/* Main Section */}
      <div className="mx-auto mt-8 grid max-w-7xl gap-8 lg:grid-cols-3">

        {/* Cart Items */}
        <div className="space-y-4 lg:col-span-2">

          {cartItems.length === 0 ? (
            <div className="rounded-2xl bg-white p-10 text-center shadow-sm">
              <div className="text-6xl">🛒</div>

              <h2 className="mt-4 text-xl font-semibold text-gray-800">
                Your cart is empty
              </h2>

              <p className="mt-2 text-gray-500">
                Add some products to your cart to see them here.
              </p>

              <button className="mt-6 rounded-xl bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800">
                Continue Shopping
              </button>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-sm sm:flex-row sm:items-center"
              >

                {/* Product Image */}
                <div className="flex h-32 w-full items-center justify-center rounded-xl bg-gray-100 sm:h-28 sm:w-28">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full rounded-xl object-contain p-3"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1">
                  <h2 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Product ID: {item.id}
                  </p>

                  <p className="mt-3 text-lg font-bold text-gray-900">
                    ₹{item.price}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-lg transition hover:bg-gray-100">
                    −
                  </button>

                  <span className="w-6 text-center font-medium">
                    {item.quantity}
                  </span>

                  <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-lg transition hover:bg-gray-100">
                    +
                  </button>
                </div>

                {/* Remove */}
                <button className="text-sm font-medium text-red-500 transition hover:text-red-700">
                  Remove
                </button>

              </div>
            ))
          )}

        </div>

        {/* Order Summary */}
        {cartItems.length > 0 && (
          <div className="h-fit rounded-2xl bg-white p-6 shadow-sm">
            
            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">

              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>
                  ₹{subtotal}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Delivery</span>
                <span>
                  {deliveryFee === 0
                    ? "FREE"
                    : `₹${deliveryFee}`}
                </span>
              </div>

              <div className="border-t pt-4">
                <div className="flex justify-between text-lg font-bold text-gray-900">
                  <span>Total</span>
                  <span>
                    ₹{total}
                  </span>
                </div>
              </div>

            </div>

            {/* Checkout */}
            <button className="mt-6 w-full rounded-xl bg-black py-3.5 font-semibold text-white transition hover:bg-gray-800 active:scale-[0.98]">
              Proceed to Checkout
            </button>

            <button className="mt-3 w-full rounded-xl border border-gray-300 py-3 font-medium text-gray-700 transition hover:bg-gray-50">
              Continue Shopping
            </button>

          </div>
        )}

      </div>
    </div>
  );
}

export default Cart;