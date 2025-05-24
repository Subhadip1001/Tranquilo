import React from 'react'

const HowItWork = () => {
    const steps = [
        {
            no: 1,
            title: "Sign Up",
            description: "Create an account to get started with Tranquilo and access our services."
        },
        {
            no: 2,
            title: "Chat with Tranquilo",
            description: "Share your thoughts and feelings with your AI companion in a judgment-free space."
        },
        {
            no: 3,
            title: "Receive Personalized Support",
            description: "Get tailored insights, coping strategies, and resources based on your needs."
        }
    ];

  return (
    <div name="HowItWork" className='bg-green-50 h-screen w-full px-10 flex flex-col justify-center items-center gap-10'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <h1 className='text-4xl font-bold'>How <span className='bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text'>Tranquilo</span> Works</h1>
        <p className='text-lg text-gray-600 text-center'>A simple process designed to provide you with consistent, accessible mental health <br /> support.</p>
      </div>
      <div>
        <div className='grid grid-cols-3 gap-10 mt-10'>
          {steps.map((step) => (
            <div 
              key={step.no} 
              className='bg-white h-[250px] w-[300px] flex flex-col justify-start items-start rounded-lg p-5 shadow-lg shadow-[#c3e5eb] gap-4'
            >
                <h1 className='text-4xl font-extrabold text-[#51aeffa1]'>0{step.no}</h1>
              <h2 className='text-xl font-semibold'>{step.title}</h2>
              <p className='text-gray-600'>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default HowItWork
