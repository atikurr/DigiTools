import { toast } from "react-toastify";

const Cart = ({ carts, setCarts }) => {
  const total = carts.reduce((sum, item) => sum + parseInt(item.price), 0);

  const handleRemove = (index) => {
    const removed = carts[index];
    const updated = carts.filter((_, i) => i !== index);
    setCarts(updated);
    toast.error(`${removed.name} removed from cart!`, { icon: "🗑️" });
  };

  const handleCheckout = () => {
    setCarts([]);
    toast.success("Order placed! Cart cleared.", { icon: "✅" });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-10 font-manrope">
      <div className="bg-white rounded-[2.5rem] border border-gray-50 shadow-sm p-6 md:p-10">
        <h2 className="text-xl font-bold text-gray-900 mb-8 text-left uppercase tracking-tight">
          Your Cart
        </h2>

        {carts.length === 0 ? (
          <div className="py-16 text-center">
            <p className="text-gray-400 font-medium">No items added yet</p>
          </div>
        ) : (
          <div className="flex flex-col gap-4">
            {carts.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-6 py-5 bg-[#F9FAFB] rounded-2xl border border-gray-50 transition-all"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-gray-100">
                    <img src={item.image} alt={item.name} className="w-7 h-7 object-contain" />
                  </div>
                  <div className="text-left">
                    <p className="font-bold text-gray-900 text-lg leading-tight">{item.name}</p>
                    <p className="text-sm text-gray-400 font-medium mt-1">${item.price}</p>
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
              <span className="text-gray-400 font-semibold uppercase tracking-widest text-[10px]">Total:</span>
              <span className="text-3xl font-black text-gray-900 tracking-tight">${total}</span>
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