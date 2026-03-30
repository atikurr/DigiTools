import BannerImage from "../assets/banner.png";
import { BiBullseye } from "react-icons/bi";
import { TiMediaPlayOutline } from "react-icons/ti";

const Banner = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center px-6">
        {/* Left Content */}
        <div className="space-y-6">
          {/* Tag */}
          <div className="flex items-center gap-2 bg-[#E1E7FF] px-4 py-1.5 rounded-full w-fit">
            <BiBullseye className="text-(--primary-color)" size={16} />

            <span className="text-sm font-medium text-(--primary-color)">
              New: AI-Powered Tools Available
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-5xl font-bold text-[#101727] leading-tight">
            Supercharge Your <br />
            <span className="text-(--primary-color)">
              Digital Workflow
            </span>
          </h1>

          {/* Description */}
          <p className="text-gray-500 max-w-lg text-sm lg:text-base">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {/* Primary Button */}
            <button className="bg-(--primary-color) text-white px-6 py-3 rounded-full text-sm font-bold hover:opacity-90 transition">
              Explore Products
            </button>

            {/* Watch Demo */}
            <button className="border border-(--primary-color) text-(--primary-color) px-6 py-3 rounded-full text-sm font-bold flex items-center gap-1 hover:bg-purple-50 transition">
              <TiMediaPlayOutline size={20} />
              Watch Demo
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={BannerImage}
            alt="banner"
            className="w-full max-w-md lg:max-w-lg object-contain rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
