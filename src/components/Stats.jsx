const Stats = () => {
  return (
    <div className="w-full py-12 bg-[linear-gradient(to_right,var(--primary-color),#A855F7)]">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 text-center text-white divide-y md:divide-y-0 md:divide-x divide-white/20">
        
        <div className="py-4 space-y-4">
          <h2 className="text-6xl font-extrabold">50K+</h2>
          <p className="text-2xl font-medium opacity-80">Active Users</p>
        </div>

        <div className="py-4 space-y-2">
          <h2 className="text-6xl font-extrabold">200+</h2>
          <p className="text-2xl font-medium opacity-80">Premium Tools</p>
        </div>

        <div className="py-4 space-y-2">
          <h2 className="text-6xl font-extrabold">4.9</h2>
          <p className="text-2xl font-medium opacity-80">Rating</p>
        </div>

      </div>
    </div>
  );
};

export default Stats;