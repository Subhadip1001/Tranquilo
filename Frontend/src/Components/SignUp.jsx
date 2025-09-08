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
      toast.error(`${error.response.data.message}`);
      console.error("Error signing up:", error);
    }
  };

    return (
    <div className="min-h-screen w-full px-4 sm:px-6 py-8 sm:py-12 flex justify-center items-center bg-green-50">
      <div className="w-full max-w-md bg-white rounded-lg px-4 sm:px-6 py-8 flex flex-col justify-center items-center gap-6 shadow-xl shadow-[#c3e5eb]">
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-center">
          Get{" "}
          <span className="bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text">
            Consultation
          </span>
        </h1>
        <div className="w-full">
          <form onSubmit={handleSubmit} className="w-full">
            <div className="flex flex-col gap-4 w-full">
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
                type="text"
                placeholder="Full Name"
                className="w-full h-12 border rounded-lg px-4 outline-none"
              />
              <input
                value={age}
                onChange={(event) => setAge(event.target.value)}
                required
                type="number"
                placeholder="Age"
                className="w-full h-12 border rounded-lg px-4 outline-none"
              />
              <input
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
                type="email"
                placeholder="Email"
                className="w-full h-12 border rounded-lg px-4 outline-none"
              />
              <input
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
                type="password"
                placeholder="Password"
                className="w-full h-12 border rounded-lg px-4 outline-none"
              />
              <div className="flex items-center gap-2 text-sm sm:text-base">
                <input
                  checked={termsAccepted}
                  onChange={() => setTermsAccepted(!termsAccepted)}
                  required
                  type="checkbox"
                  className="w-4 h-4"
                />
                <span>Accept Terms and Conditions</span>
              </div>
              <button className="w-full h-12 bg-[#1DCD9F] rounded-lg text-white font-semibold hover:bg-[#077A7D] transition duration-300 cursor-pointer">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
