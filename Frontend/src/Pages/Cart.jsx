import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Store/auth";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, addToCart, removeFromCart, decreaseQty } = useAuth();

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="max-w-2xl mx-auto mt-10 px-4">

      <h1 className="text-2xl font-bold text-center mb-6">My Cart 🛒</h1>

      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg mb-4">Cart is empty</p>
          <button
            onClick={() => navigate("/")}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="border p-4 rounded-xl shadow-sm flex justify-between items-center bg-white"
              >
                {/* LEFT */}
                <div className="flex items-center gap-4">
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                  )}
                  <div>
                    <p className="font-semibold">{item.title || item.name}</p>
                    {item.category && (
                      <p className="text-sm text-gray-500">{item.category}</p>
                    )}
                    <p className="text-orange-600 font-bold">₹{item.price}</p>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex flex-col items-end gap-2">
                  <div className="flex items-center border rounded-lg overflow-hidden">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 font-bold text-lg"
                    >
                      −
                    </button>
                    <span className="px-3 font-semibold">{item.quantity}</span>
                    <button
                      onClick={() => addToCart(item)}
                      className="px-3 py-1 bg-gray-100 hover:bg-gray-200 font-bold text-lg"
                    >
                      +
                    </button>
                  </div>
                  <p className="text-sm font-semibold text-gray-700">
                    Subtotal: ₹{item.price * item.quantity}
                  </p>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right font-bold text-xl mb-4">
            Total ({totalItems} items): ₹{totalPrice}
          </div>

          <button
            onClick={() => navigate("/process", { state: cart })}
            className="w-full bg-green-600 text-white px-4 py-3 rounded-xl font-semibold hover:bg-green-700 transition"
          >
            Go to Payment
          </button>
        </>
      )}
    </div>
  );
};

export default Cart;