import { User, Package, Rocket } from "lucide-react";

const GetStarted = () => {
  const steps = [
    {
      id: "01",
      title: "Create Account",
      desc: "Sign up for free in seconds. No credit card required to get started.",
      icon: <User className="w-6 h-6" />,
    },
    {
      id: "02",
      title: "Choose Products",
      desc: "Browse our catalog and select the tools that fit your needs.",
      icon: <Package className="w-6 h-6" />,
    },
    {
      id: "03",
      title: "Start Creating",
      desc: "Download and start using your premium tools immediately.",
      icon: <Rocket className="w-6 h-6" />,
    },
  ];

  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          Get Started In 3 Steps
        </h2>
        <p className="text-gray-500 mb-10">
          Start using premium digital tools in minutes, not hours.
        </p>

        {/* Cards */}
        <div className="container w-10/12 mx-auto grid md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.id}
              className="relative card bg-base-100 shadow-md px-5 py-15 rounded-xl"
            >
              {/* Step number badge */}
              <div className="absolute top-4 right-4 badge badge-primary badge-lg rounded-full">
                {step.id}
              </div>

              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-full bg-purple-100 text-purple-600">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">{step.title}</h3>

              {/* Description */}
              <p className="text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GetStarted;
