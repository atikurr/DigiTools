import { FaYoutube, FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B1220] text-white  pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-6 gap-12 lg:gap-8 text-center sm:text-left">
          {/* Logo + Description (2 Columns) */}
          <div className="md:col-span-2 space-y-4">
            <h2 className="text-xl font-bold">DigiTools</h2>
            <p className="text-sm text-gray-400 max-w-sm">
              Premium digital tools for creators, <br /> professionals, and businesses.
              Work smarter <br /> with our suite of powerful tools.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-3">Product</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Features</li>
              <li className="hover:text-white cursor-pointer">Pricing</li>
              <li className="hover:text-white cursor-pointer">Templates</li>
              <li className="hover:text-white cursor-pointer">Integrations</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Blog</li>
              <li className="hover:text-white cursor-pointer">Careers</li>
              <li className="hover:text-white cursor-pointer">Press</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-white cursor-pointer">Documentation</li>
              <li className="hover:text-white cursor-pointer">Help Center</li>
              <li className="hover:text-white cursor-pointer">Community</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center sm:items-start space-y-4">
            <h3 className="font-semibold mb-3">Social Links</h3>

            <div className="flex gap-3">
              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-black hover:bg-gray-200 cursor-pointer">
                <FaYoutube size={14} />
              </div>

              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-black hover:bg-gray-200 cursor-pointer">
                <FaFacebookF size={14} />
              </div>

              <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-black hover:bg-gray-200 cursor-pointer">
                <FaXTwitter size={14} />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © 2026 Digitools. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <span className="hover:text-white cursor-pointer">
              Privacy Policy
            </span>
            <span className="hover:text-white cursor-pointer">
              Terms of Service
            </span>
            <span className="hover:text-white cursor-pointer">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
