import { ShoppingCart } from "lucide-react";

const Navbar = ({ cart = [] }) => {
  return (
    <div className="w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="src/assets/DigiTools.png" alt="logo" className="h-8" />
        </div>
        {/* Center Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#101727]">
          <li>
            <a
              href="#products"
              className="hover:text-[var(--primary-color)] transition"
            >
              Products
            </a>
          </li>

          <li>
            <a
              href="#features"
              className="hover:text-[var(--primary-color)] transition"
            >
              Features
            </a>
          </li>

          <li>
            <a
              href="#pricing"
              className="hover:text-[var(--primary-color)] transition"
            >
              Pricing
            </a>
          </li>

          <li>
            <a
              href="#testimonials"
              className="hover:text-[var(--primary-color)] transition"
            >
              Testimonials
            </a>
          </li>

          <li>
            <a
              href="#faq"
              className="hover:text-[var(--primary-color)] transition"
            >
              FAQ
            </a>
          </li>
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <div className="relative cursor-pointer">
            <ShoppingCart size={20} />

            <span className="absolute -top-2 -right-2 bg-[var(--primary-color)] text-white text-[10px] px-1.5 py-[1px] rounded-full">
              {cart.length}
            </span>
          </div>

          {/* Login */}
          <button className="text-sm text-[#101727] hover:text-[var(--primary-color)] transition">
            Login
          </button>

          {/* Button */}
          <button className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
