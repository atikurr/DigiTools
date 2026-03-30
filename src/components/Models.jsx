import ModelCard from "./ModelCard";
import Cart from "./Cart";

const Models = ({ models, activeTab, setActiveTab, carts, setCarts }) => {
  return (
    <div className="w-full py-20 bg-[#F9FAFB] text-center">
      
      {/* Title */}
      <div className="max-w-7xl mx-auto px-6 mb-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-[#111827]">
          Premium Digital Tools
        </h1>
        <p className="text-[#627382] mt-4">
          Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.
        </p>
      </div>

      {/* Tabs */}
      <div className="tabs tabs-box bg-[#F9FAFB] justify-center mb-10">
        <input
          type="radio"
          name="tabs"
          className="tab w-40 rounded-full"
          aria-label="Products"
          checked={activeTab === "model"}
          onChange={() => setActiveTab("model")}
        />
        <input
          type="radio"
          name="tabs"
          className="tab w-40 rounded-full"
          aria-label={`Cart (${carts.length})`}
          checked={activeTab === "Cart"}
          onChange={() => setActiveTab("Cart")}
        />
      </div>

      {/* Products Tab */}
      {activeTab === "model" && (
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
          {models.map((model) => (
            <ModelCard key={model.id} model={model} carts={carts} setCarts={setCarts} />
          ))}
        </div>
      )}

      {/* Cart Tab */}
      {activeTab === "Cart" && <Cart carts={carts} setCarts={setCarts} />}
    </div>
  );
};

export default Models;