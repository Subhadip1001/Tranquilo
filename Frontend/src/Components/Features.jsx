import React from 'react'
import { MdOutlineSecurity } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";

const Features = () => {
  const featuresData = [
    {
      icon: <MdOutlineSecurity size={40} className="text-[#1DCD9F]" />,
      title: "Complete Privacy",
      description: "Your conversations are encrypted and your data is never shared with third parties."
    },
    {
      icon: <LuBrain size={40} className="text-[#1DCD9F]" />,
      title: "Personalized Insights",
      description: "Receive tailored mental wellness strategies based on your unique needs and patterns."
    },
    {
      icon: <BiSupport size={40} className="text-[#1DCD9F]" />,
      title: "24/7 Support",
      description: "Chat anytime with an AI companion that's always ready to listen without judgment."
    }
  ];

  return (
    <div name="Features" className='bg-green-50 h-screen w-full px-10 flex flex-col justify-center items-center gap-10'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-4xl font-bold'>Features That <span className='bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text'>Support Your Journey</span></h1>
        <p className='text-lg text-gray-600 text-center'>Tranquilo combines advanced AI with evidence-based mental health practices to <br /> provide comprehensive support.</p>
      </div>
      {/* Features */}
      <div>
        <div className='grid grid-cols-3 gap-20 mt-10'>
          {featuresData.map((feature, index) => (
            <div
              key={index} 
              className='bg-white flex flex-col justify-center items-center rounded-lg px-8 py-10 shadow-lg shadow-[#c3e5eb] transition duration-300 transform hover:scale-105'
            >
              <div className='mb-4'>
                {feature.icon}
              </div>
              <h2 className='text-xl font-semibold'>{feature.title}</h2>
              <p className='text-gray-600 text-center'>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Features
