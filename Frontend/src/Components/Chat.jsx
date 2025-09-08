import React from 'react'
import logo from "../assets/image.png";

const Chat = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    const userName = user ? user.fullname : "User";

return (
    <div className='bg-green-50 h-screen w-full px-10 py-40 flex flex-col justify-center items-center gap-6'>
            {/* Logo */}
            <div className='flex  items-center w-full fixed top-4 left-8'>
                    <img
                    className='h-[100px] w-[100px]'
                    src={logo}
                    alt="logo"
                    />
                    <h1 className='text-4xl font-extrabold bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text'>Tranquilo</h1>
            </div>

        <h1 className='text-8xl font-extrabold bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text'>Welcome {userName}</h1>
        <h1 className='text-6xl font-extrabold bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text'>Get Started your Counsultation with AI</h1>
        <a 
        href="https://cdn.botpress.cloud/webchat/v2.3/shareable.html?configUrl=https://files.bpcontent.cloud/2025/04/03/16/20250403165630-IPOLXNQ1.json"
        className='px-4 py-2 text-4xl bg-[#1DCD9F] rounded-lg text-white font-semibold hover:bg-[#077A7D] transition duration-300 cursor-pointer'
        target="_blank"
        >Get Started</a>
    </div>
)
}

export default Chat
