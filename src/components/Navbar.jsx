import { useState } from "react";
import { ShoppingCart, Menu, X } from "lucide-react";
import logo from "../assets/DigiTools.png";

const Navbar = ({ cart = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = ["products", "features", "pricing", "testimonials", "faq"];

  return (
    <div className="w-full shadow-sm bg-white relative">
      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3 relative">
        {/* Logo */}
        <img src={logo} alt="logo" className="h-8" />

        {/* Center Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-semibold text-[#101727] absolute left-1/2 -translate-x-1/2">
          {menuItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="hover:text-[var(--primary-color)] transition capitalize"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Right Side */}
        <div className="flex items-center gap-5">
          {/* Cart */}
          <div className="relative cursor-pointer">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-[var(--primary-color)] text-white text-[10px] px-1.5 rounded-full">
              {cart.length}
            </span>
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-sm font-semibold text-[#101727] hover:text-[var(--primary-color)]">
              Login
            </button>

            <button className="bg-[var(--primary-color)] text-white px-4 py-2 rounded-full text-sm hover:opacity-90 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white shadow-md flex flex-col items-center text-center">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="text-sm font-medium text-[#101727] hover:text-[var(--primary-color)] capitalize"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}         

          <button className="text-sm">Login</button>
          <button className="w-full bg-[var(--primary-color)] text-white py-2 rounded-full text-sm">
            Get Started
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
