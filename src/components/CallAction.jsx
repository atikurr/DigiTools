const CallAction = () => {
  return (
    <div className="w-full py-20 bg-[linear-gradient(to_right,var(--primary-color),#A855F7)] text-center text-white">
      
      <div className="max-w-3xl mx-auto px-6 space-y-5">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-[40px] font-extrabold">
          Ready To Transform Your Workflow?
        </h1>

        {/* Description */}
        <p className="text-sm md:text-base text-white/80 leading-relaxed">
          Join thousands of professionals who are already using Digitools to work smarter.<br />
          Start your free trial today.
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-4 flex-wrap pt-3">
          
          {/* Primary */}
          <button className="bg-white text-[var(--primary-color)] px-6 py-2.5 rounded-full text-sm font-semibold shadow-md hover:scale-105 transition">
            Explore Products
          </button>

          {/* Outline */}
          <button className="border border-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-white hover:text-[var(--primary-color)] transition">
            View Pricing
          </button>

        </div>

        {/* Footer text */}
        <p className="text-xs text-white/70 pt-2">
          14-day free trial • No credit card required • Cancel anytime
        </p>

      </div>
    </div>
  );
};

export default CallAction;