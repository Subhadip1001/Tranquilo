import React from "react";

const HowItWork = () => {
  const steps = [
    {
      no: 1,
      title: "Sign Up",
      description:
        "Create an account to get started with Tranquilo and access our services.",
    },
    {
      no: 2,
      title: "Chat with Tranquilo",
      description:
        "Share your thoughts and feelings with your AI companion in a judgment-free space.",
    },
    {
      no: 3,
      title: "Receive Personalized Support",
      description:
        "Get tailored insights, coping strategies, and resources based on your needs.",
    },
  ];

  return (
    <div
      name="HowItWork"
      className="bg-green-50 min-h-screen w-full px-6 md:px-10 py-20 flex flex-col justify-center items-center gap-10"
    >
      {/* Heading */}
      <div className="flex flex-col justify-center items-center gap-2 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          How{" "}
          <span className="bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text">
            Tranquilo
          </span>{" "}
          Works
        </h1>
        <p className="text-base md:text-lg text-gray-600">
          A simple process designed to provide you with consistent, accessible
          mental health support.
        </p>
      </div>

      {/* Steps */}
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mt-10 place-items-center">
          {steps.map((step) => (
            <div
              key={step.no}
              className="bg-white h-auto w-[90%] md:h-[250px] md:w-[300px] flex flex-col justify-start items-start rounded-lg p-6 shadow-lg shadow-[#c3e5eb] gap-4"
            >
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#51aeffa1]">
                0{step.no}
              </h1>
              <h2 className="text-lg md:text-xl font-semibold">{step.title}</h2>
              <p className="text-gray-600 text-sm md:text-base">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
