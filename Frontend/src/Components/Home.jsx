import { useEffect, useRef } from "react";
import { MdOutlineSecurity } from "react-icons/md";
import { LuBrain } from "react-icons/lu";
import { BiSupport } from "react-icons/bi";
import SignUp from "./SignUp";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";
import Logout from "./Logout";

const Home = () => {
  const [user] = useAuth();
  // refs for animation
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    if (rightRef.current) {
      gsap.fromTo(
        rightRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 3, ease: "power3.out" }
      );
    }

    if (leftRef.current) {
      gsap.fromTo(
        leftRef.current,
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 3, ease: "power3.out" }
      );
    }
  }, []);

  return (
    <div className="bg-green-50 h-screen w-full px-8 py-36 md:px-10 md:py-40 flex justify-between items-center gap-6">
      {/* left */}
      <div
        ref={leftRef}
        className="w-full md:w-1/2 flex justify-center items-center text-center md:text-left"
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Your Personal{" "}
            <span className="bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text">
              Mental Wellness
            </span>{" "}
            Companion
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mt-4">
            Connect with Tranquilo, an AI companion that listens, understands,
            and helps you navigate your mental health journey with personalized
            support.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <Link
              to="/chat"
              className="px-4 py-2 bg-[#1DCD9F] rounded-lg text-white font-semibold hover:bg-[#077A7D] transition duration-300 cursor-pointer"
            >
              Start Chatting Now
            </Link>

            {/* Show Login button only on mobile */}
            {!user ? (
            <Link
              to="/login"
              className="px-4 py-2 text-[#1DCD9F] border rounded-lg font-semibold cursor-pointer hover:border-[#1DCD9F] hover:text-white hover:bg-[#1DCD9F] transition duration-300"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          ) : (
            <Logout />
          )}
          </div>

          {/* Features */}
          <div className="flex flex-col sm:flex-row gap-6 mt-10 justify-center md:justify-start">
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

      {/* right (SignUp only on medium+ screens) */}
      <div
        ref={rightRef}
        className="hidden md:flex w-1/2 justify-center items-center"
      >
        <SignUp />
      </div>
    </div>
  );
};

export default Home;
