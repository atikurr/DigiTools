import React from "react";
import { LuCheck } from "react-icons/lu";

const Pricing = () => {
  return (
    <div id="pricing" className="w-full py-20 bg-white text-center font-sans">
      <div className="max-w-300 mx-auto px-6">
        {/* Title Section */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-500 font-normal mt-4">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-16 items-center">
          {/* Starter Plan */}
          <div className="bg-[#F9FAFB] h-full p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col">
            <h3 className="text-xl font-bold text-left text-[#111827]">
              Starter
            </h3>
            <p className="text-sm text-gray-500 text-left mt-1">
              Perfect for getting started
            </p>

            <div className="mt-6 mb-6 text-left">
              <span className="text-4xl font-bold text-[#111827]">$0</span>
              <span className="text-gray-400 text-lg font-medium">/Month</span>
            </div>

            <ul className="space-y-3 text-left grow">
              {[
                "Access to 10 free tools",
                "Basic templates",
                "Community support",
                "1 project per month",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-gray-600 text-[15px]"
                >
                  <LuCheck className="text-green-500 text-xl stroke-[3px]" />{" "}
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full bg-(--primary-color) hover:bg-[#6D28D9] text-white py-3 rounded-full text-[15px] font-semibold transition-all">
              Get Started Free
            </button>
          </div>

          {/* Pro Plan  */}
          <div className="relative bg-[linear-gradient(to_right,var(--primary-color),#A855F7)] p-8 rounded-3xl shadow-2xl flex flex-col h-full transform scale-105 z-10 border-none">
            {/* Badge */}
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-[12px] px-4 py-1 rounded-full font-bold shadow-sm">
              Most Popular
            </span>

            <h3 className="text-xl font-bold text-left text-white">Pro</h3>
            <p className="text-sm text-white/80 text-left mt-1">
              Best for professionals
            </p>

            <div className="mt-6 mb-6 text-left text-white">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-white/70 text-lg font-medium">/Month</span>
            </div>

            <ul className="space-y-3 text-left grow text-white">
              {[
                "Access to all premium tools",
                "Unlimited templates",
                "Priority support",
                "Unlimited projects",
                "Cloud sync",
                "Advanced analytics",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2 text-[15px]">
                  <LuCheck className="text-white text-xl stroke-[3px]" /> {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full bg-white text-[#8B1AFA] hover:bg-gray-100 py-3 rounded-full text-[15px] font-bold transition-all">
              Start Pro Trial
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="bg-[#F9FAFB] p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-fit">
            <h3 className="text-xl font-bold text-left text-[#111827]">
              Enterprise
            </h3>
            <p className="text-sm text-gray-500 text-left mt-1">
              For teams and businesses
            </p>

            <div className="mt-6 mb-6 text-left">
              <span className="text-4xl font-bold text-[#111827]">$99</span>
              <span className="text-gray-400 text-lg font-medium">/Month</span>
            </div>

            <ul className="space-y-3 text-left grow">
              {[
                "Everything in Pro",
                "Team collaboration",
                "Custom integrations",
                "Dedicated support",
                "SLA guarantee",
                "Custom branding",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-gray-600 text-[15px]"
                >
                  <LuCheck className="text-green-500 text-xl stroke-[3px]" />{" "}
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 w-full bg-(--primary-color) hover:bg-[#6D28D9] text-white py-3 rounded-full text-[15px] font-semibold transition-all">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
