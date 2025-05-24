import { useEffect, useRef } from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import SignUp from "./SignUp";
import { gsap } from "gsap";
import { Link } from "react-router-dom";

const Home = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      rightRef.current,
      { x: "100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 3, ease: "power3.out" }
    );

    gsap.fromTo(
      leftRef.current,
      { x: "-100%", opacity: 0 },
      { x: "0%", opacity: 1, duration: 3, ease: "power3.out" }
    );
  }, []);

  return (
    <div
      className="bg-green-50 h-screen w-full px-10 py-40 flex justify-between items-center gap-6"
    >
      {/* left */}
      <div
      ref={leftRef}
      className="h-screen w-1/2 flex justify-center items-center">
        <div>
          <h1 className="text-6xl font-bold">
            Your Personal{" "}
            <span className="bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text">
              Mental Wellness
            </span>{" "}
            Companion
          </h1>
          <br />
          <p className="text-gray-600 text-xl">
            Connect with Tranquilo, an AI companion that listens, understands,
            and helps you navigate your mental health journey with personalized
            support.
          </p>
          <div className="flex gap-4 mt-4">
            <Link to="/chat" className="px-4 py-2 bg-[#1DCD9F] rounded-lg text-white font-semibold hover:bg-[#077A7D] transition duration-300 cursor-pointer">
              Start Chatting Now
            </Link>
          </div>
          <div className="flex gap-6 mt-10">
            <div className="flex items-center gap-x-0.5 text-gray-600">
              <span className="p-1 text-2xl text-[#1DCD9F]">
                <MdOutlineSecurity />
              </span>
              Private & Secure
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="p-1 text-2xl text-[#1DCD9F]">
                <LuBrain />
              </span>
              AI-Powered
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="p-1 text-2xl text-[#1DCD9F]">
                <BiSupport />
              </span>
              24/7 Support
            </div>
          </div>
        </div>
      </div>

      <div
        ref={rightRef}
        className="h-screen w-1/2 flex justify-center items-center"
      >
        <SignUp />
      </div>
      {/* <Features/>
      <HowItWork/> */}
    </div>
  );
};

export default Home;
