import { toast } from "react-toastify";

const ModelCard = ({ model, carts, setCarts }) => {
  const isBuy = carts.some((item) => item.id === model.id);

  const handleBuy = () => {
    if (!isBuy) {
      setCarts([...carts, model]);
      toast.success(`${model.name} added to cart!`, {
        icon: "🛒",
      });
    }
  };

  return (
    <div className="relative bg-white rounded-4xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group text-left flex flex-col">
      {model.tag && (
        <span className={`absolute top-6 right-6 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider 
          ${
            model.tag === "Best Seller"
              ? "bg-orange-100 text-orange-600"
              : model.tag === "Popular"
              ? "bg-blue-100 text-blue-600"
              : "bg-green-100 text-green-600"
          }`}>
          {model.tag}
        </span>
      )}

      <div className="w-14 h-14 bg-gray-50 rounded-[50%] flex items-center justify-center mb-6 border border-gray-100">
        <img src={model.image} alt={model.name} className="w-8 h-8" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-2">{model.name}</h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-6">{model.description}</p>

      <div className="mb-6">
        <span className="text-2xl font-extrabold text-gray-900">${model.price}</span>
        <span className="text-gray-400 text-sm font-medium ml-1">/{model.period}</span>
      </div>

      <ul className="space-y-3 mb-8 grow">
        {model.features.map((f, i) => (
          <li key={i} className="flex items-center text-sm text-gray-600 font-medium">
            <span className="text-green-500 mr-3 font-bold">✓</span>
            {f}
          </li>
        ))}
      </ul>

      <button
        onClick={handleBuy}
        disabled={isBuy}
        className={`w-full font-bold py-4 rounded-2xl transition-all shadow-lg active:scale-95
          ${
            isBuy
              ? "bg-green-500 text-white shadow-green-200 cursor-not-allowed"
              : "bg-(--primary-color) hover:bg-[#6D28D9] text-white shadow-purple-100"
          }`}
      >
        {isBuy ? "Added To Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ModelCard;