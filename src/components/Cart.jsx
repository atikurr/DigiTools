import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const total = carts.reduce((sum, item) => sum + parseInt(item.price), 0);

  const handleRemove = (index) => {
    const removed = carts[index];
    const updated = carts.filter((_, i) => i !== index);
    setCarts(updated);
    toast.error(`${removed.name} removed from cart!`,);
  };

  const handleCheckout = () => {
    setCarts([]);
    toast.success("Order placed! Cart cleared.",);
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 font-manrope">
      <div className="bg-white rounded-[2.5rem] border border-gray-50 shadow-sm p-6 md:p-10">
        <h2 className="text-xl font-bold text-gray-900 mb-12 text-left uppercase tracking-tight">
          Your Cart
        </h2>

        {carts.length === 0 ? (
          /* --- cart--- */
          <div className="py-24 flex flex-col items-center justify-center">
            <div className="mb-6 text-gray-200">
              {/*  */}
              <svg 
                width="100" 
                height="100" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="1" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1"></circle>
                <circle cx="20" cy="21" r="1"></circle>
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
              </svg>
            </div>
            <p className="text-gray-400 font-medium text-[15px] tracking-wide">
              Your cart is empty
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {/* Cart Items List */}
            {carts.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-6 py-5 bg-[#F9FAFB] rounded-2xl border border-gray-50 transition-all hover:border-purple-100"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100 font-bold text-xl">
                     <img src={item.image} alt="" className="w-7 h-7 object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-lg leading-tight">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-400 font-medium mt-1">
                      ${item.price}
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemove(index)}
                  className="text-[#FF4D8D] hover:text-red-600 text-sm font-bold transition-colors"
                >
                  Remove
                </button>
              </div>
            ))}

            <div className="flex justify-between items-center px-2 py-8 mt-4 border-t border-gray-50">
              <span className="text-gray-400 font-normal uppercase tracking-widest text-[16px">
                Total:
              </span>
              <span className="text-3xl font-black text-gray-900 tracking-tight">
                ${total}
              </span>
            </div>

            <button
              onClick={handleCheckout}
              className="w-full bg-(--primary-color) hover:bg-[#6D28D9] text-white font-extrabold py-5 rounded-2xl transition-all shadow-xl shadow-purple-100 active:scale-[0.98] text-lg"
            >
              Proceed To Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;