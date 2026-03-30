import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

const steps = [
  {
    id: "01",
    title: "Create Account",
    description:
      "Sign up for free in seconds. No credit card required to get started.",
    image: userImg,
  },
  {
    id: "02",
    title: "Choose Products",
    description:
      "Browse our catalog and select the tools that fit your needs.",
    image: packageImg,
  },
  {
    id: "03",
    title: "Start Creating",
    description:
      "Download and start using your premium tools immediately.",
    image: rocketImg,
  },
];

const Steps = () => {
  return (
    <section className="w-full py-20 bg-[#F9FAFB]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-extrabold text-[#101727]">
          Get Started In 3 Steps
        </h2>

        <p className="text-[#627382] mt-3">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative bg-white p-8 rounded-2xl border border-gray-200 shadow-sm text-center h-95 flex flex-col justify-center"
            >
              
              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-(--primary-color) text-white rounded-full text-xs flex items-center justify-center">
                {step.id}
              </div>

              {/* Image */}
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-purple-100 mb-5">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-8 h-8 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-[#101727]">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[16px] text-[#627382] mt-4">
                {step.description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Steps;