import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../Store/auth";
import {
  FaShippingFast, FaHeadset, FaUndo, FaLock,
  FaCreditCard, FaMoneyBillWave, FaWallet, FaMobileAlt
} from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import { toast } from "react-toastify";

const paymentMethods = [
  { id: "stripe", label: "Credit / Debit Card", icon: <FaCreditCard className="text-blue-500 text-xl" />, desc: "Visa, Mastercard, RuPay" },
  { id: "upi", label: "UPI Payment", icon: <FaMobileAlt className="text-green-500 text-xl" />, desc: "GPay, PhonePe, Paytm" },
  { id: "wallet", label: "Wallet", icon: <FaWallet className="text-purple-500 text-xl" />, desc: "Paytm, Amazon Pay" },
  { id: "cod", label: "Cash on Delivery", icon: <FaMoneyBillWave className="text-orange-500 text-xl" />, desc: "Pay when delivered" },
];

const features = [
  { icon: <FaShippingFast className="text-3xl text-orange-500" />, label: "Fast Delivery" },
  { icon: <FaHeadset className="text-3xl text-orange-500" />, label: "24/7 Support" },
  { icon: <FaUndo className="text-3xl text-orange-500" />, label: "Easy Returns" },
  { icon: <FaLock className="text-3xl text-orange-500" />, label: "Secure Payment" },
];

const Process = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { cart: globalCart } = useAuth();
  const [selectedMethod, setSelectedMethod] = useState("stripe");
  const [paying, setPaying] = useState(false);

  // location.state se aaya cart ya global cart
  const cart = (location.state && location.state.length > 0)
    ? location.state
    : globalCart;

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1), 0
  );
  const totalItems = cart.reduce(
    (total, item) => total + (item.quantity || 1), 0
  );

  const handlePayment = () => {
    setPaying(true);
    setTimeout(() => {
      if (selectedMethod === "stripe") {
        window.location.href = "https://buy.stripe.com/test_7sY9AU0BncOU8jqc4A9fW00";
      } else if (selectedMethod === "upi") {
        toast.success("UPI Payment gateway — integrate karo apna UPI ID");
      } else if (selectedMethod === "wallet") {
        toast.success("Wallet Payment — integrate karo apna wallet gateway");
        navigate("/", { replace: true });
      } else if (selectedMethod === "cod") {
        navigate("/", { replace: true });
        toast.success("Order placed! Cash on Delivery selected");
      }
      setPaying(false);
    }, 1000);
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold text-gray-700 dark:text-white mb-2">No Products in Cart</h2>
        <p className="text-gray-400 mb-6">Add some products first before checkout</p>
        <button
          onClick={() => navigate("/")}
          className="bg-orange-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-600 transition"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* Page Title */}
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
          Checkout
        </h2>
        <p className="text-gray-400 text-sm mt-1">Complete your order securely</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        {/* LEFT — Order Summary */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
          <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-5 flex items-center justify-between">
            Order Summary
            <span className="text-sm font-normal text-gray-400">{totalItems} items</span>
          </h3>

          {/* Cart Items */}
          <div className="space-y-4 max-h-72 overflow-y-auto pr-1">
            {cart.map((item, index) => (
              <div key={index} className="flex items-center gap-3 border-b dark:border-gray-700 pb-3">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-14 h-14 object-cover rounded-xl shrink-0"
                  />
                )}
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-gray-800 dark:text-white text-sm truncate">
                    {item.title || item.name}
                  </p>
                  {item.category && (
                    <p className="text-xs text-gray-400">{item.category}</p>
                  )}
                  {item.quantity > 1 && (
                    <p className="text-xs text-gray-400">Qty: {item.quantity}</p>
                  )}
                </div>
                <p className="font-semibold text-orange-500 shrink-0 text-sm">
                  ₹{item.price * (item.quantity || 1)}
                </p>
              </div>
            ))}
          </div>

          {/* Price Breakdown */}
          <div className="mt-5 space-y-2 text-sm">
            <div className="flex justify-between text-gray-500">
              <span>Subtotal</span>
              <span>₹{totalPrice}</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Delivery</span>
              <span className="text-green-600 font-medium">FREE</span>
            </div>
            <div className="flex justify-between text-gray-500">
              <span>Discount</span>
              <span className="text-green-600 font-medium">-₹0</span>
            </div>
            <div className="border-t dark:border-gray-700 pt-3 flex justify-between text-lg font-bold text-gray-800 dark:text-white">
              <span>Total</span>
              <span className="text-orange-500">₹{totalPrice}</span>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-4 gap-2 mt-6">
            {features.map((f, i) => (
              <div key={i} className="text-center p-2">
                <div className="flex justify-center mb-1">{f.icon}</div>
                <p className="text-xs text-gray-500 dark:text-gray-400">{f.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Payment Methods */}
        <div className="space-y-5">

          {/* Payment Method Selection */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
              Select Payment Method
            </h3>

            <div className="space-y-3">
              {paymentMethods.map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                    selectedMethod === method.id
                      ? "border-orange-500 bg-orange-50 dark:bg-orange-900/20"
                      : "border-gray-200 dark:border-gray-700 hover:border-gray-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value={method.id}
                    checked={selectedMethod === method.id}
                    onChange={() => setSelectedMethod(method.id)}
                    className="accent-orange-500 w-4 h-4 shrink-0"
                  />
                  <span className="shrink-0">{method.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-gray-800 dark:text-white text-sm">
                      {method.label}
                    </p>
                    <p className="text-xs text-gray-400">{method.desc}</p>
                  </div>
                  {selectedMethod === method.id && (
                    <span className="text-orange-500 text-xs font-semibold shrink-0">Selected</span>
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* UPI Input — sirf UPI select pe dikhega */}
          {selectedMethod === "upi" && (
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-5">
              <label className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 block">
                Enter UPI ID
              </label>
              <input
                type="text"
                placeholder="yourname@upi"
                className="w-full border-2 border-gray-200 dark:border-gray-600 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-orange-400 dark:bg-gray-700 dark:text-white"
              />
            </div>
          )}

          {/* Security Badge */}
          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <FaLock className="text-green-500" />
            <span>100% Secure & Encrypted Payment</span>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            disabled={paying}
            className="w-full bg-green-600 hover:bg-green-700 disabled:opacity-70 text-white py-4 rounded-2xl text-lg font-bold transition-colors flex items-center justify-center gap-2"
          >
            {paying ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                Processing...
              </>
            ) : (
              <>
                <FaLock className="text-sm" />
                Pay ₹{totalPrice}
              </>
            )}
          </button>

          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="w-full border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 py-3 rounded-2xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
          >
            ← Back to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Process;