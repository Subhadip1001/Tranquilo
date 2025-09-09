import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [user, setUser] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = {
      fullname: name,
      age: age,
      email: email,
      password,
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}api/users/signup`,
        userData
      );
      console.log("User signed up successfully:", response.data);
      if (response.status === 201) {
        toast.success(`${response.data.message}`);
        await new Promise((resolve) => setTimeout(resolve, 3000));
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setUser(response.data.user);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate("/chat");
      }
      setName("");
    } catch (error) {
      toast.error(`${error.response?.data?.message || "Something went wrong"}`);
      console.error("Error signing up:", error);
    }
  };

  return (
    <div className="min-h-screen w-full px-4 sm:px-6 py-8 sm:py-12 flex justify-center items-center bg-green-50">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl bg-white rounded-xl px-6 sm:px-8 md:px-10 py-8 sm:py-10 flex flex-col justify-center items-center gap-6 shadow-xl shadow-[#c3e5eb]">
        
        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center">
          Get{" "}
          <span className="bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text">
            Consultation
          </span>
        </h1>

        {/* Form */}
        <div className="w-full">
          <form onSubmit={handleSubmit} className="w-full space-y-4">
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
              type="text"
              placeholder="Full Name"
              className="w-full h-12 sm:h-14 border rounded-lg px-4 text-sm sm:text-base outline-none focus:border-[#1DCD9F] focus:ring-1 focus:ring-[#1DCD9F] transition"
            />
            <input
              value={age}
              onChange={(event) => setAge(event.target.value)}
              required
              type="number"
              placeholder="Age"
              className="w-full h-12 sm:h-14 border rounded-lg px-4 text-sm sm:text-base outline-none focus:border-[#1DCD9F] focus:ring-1 focus:ring-[#1DCD9F] transition"
            />
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              placeholder="Email"
              className="w-full h-12 sm:h-14 border rounded-lg px-4 text-sm sm:text-base outline-none focus:border-[#1DCD9F] focus:ring-1 focus:ring-[#1DCD9F] transition"
            />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              placeholder="Password"
              className="w-full h-12 sm:h-14 border rounded-lg px-4 text-sm sm:text-base outline-none focus:border-[#1DCD9F] focus:ring-1 focus:ring-[#1DCD9F] transition"
            />

            {/* Terms */}
            <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base">
              <input
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                required
                type="checkbox"
                className="w-4 h-4 cursor-pointer"
              />
              <span>Accept Terms and Conditions</span>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full h-12 sm:h-14 bg-[#1DCD9F] rounded-lg text-white font-semibold text-sm sm:text-base hover:bg-[#077A7D] transition duration-300 cursor-pointer"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;