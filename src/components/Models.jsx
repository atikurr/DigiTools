import ModelCard from "./ModelCard";
import Cart from "./Cart";

const Models = ({ models, activeTab, setActiveTab, carts, setCarts }) => {
  return (
    <div className="w-full py-20 bg-[#F9FAFB] text-center font-manrope">
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#111827]">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382] mt-4">
          Choose from our curated collection of premium digital products designed 
          <br /> to boost your productivity and creativity.
        </p>
      </div>

      {/* --- Tabs --- */}
      <div className="flex justify-center mb-10">
        <div className="relative p-1.5 rounded-full flex items-center">
          
          {/* fect) */}
          <div 
            className={`absolute top-1.5 bottom-1.5 left-1.5 w-35 bg-(--primary-color) rounded-full transition-all duration-300 ease-in-out shadow-lg shadow-purple-200 ${
              activeTab === "Cart" ? "translate-x-35" : "translate-x-0"
            }`}
          ></div>

          {/* Products Button */}
          <button
            onClick={() => setActiveTab("model")}
            className={`relative z-10 w-35 py-2.5 text-sm font-bold transition-colors duration-300 ${
              activeTab === "model" ? "text-white" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Products
          </button>

          {/* Cart Button */}
          <button
            onClick={() => setActiveTab("Cart")}
            className={`relative z-10 w-35 py-2.5 text-sm font-bold transition-colors duration-300 ${
              activeTab === "Cart" ? "text-white" : "text-gray-500 hover:text-gray-700"
            }`}
          >
            Cart ({carts.length})
          </button>
        </div>
      </div>

      {/* Content Rendering */}
      <div className="max-w-7xl mx-auto px-6">
        {activeTab === "model" ? (
          <div className="grid md:grid-cols-3 gap-8">
            {models.map((model) => (
              <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts} />
            ))}
          </div>
        ) : (
          <Cart carts={carts} setCarts={setCarts} />
        )}
      </div>
    </div>
  );
};

export default Models;