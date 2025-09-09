import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider";
import logo from "../assets/image.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = { email, password };

    try {
      const respone = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}api/users/login`,
        loginData
      );
      if (respone.status === 200) {
        console.log("User logged in successfully:", respone.data);
        toast.success(`${respone.data.message}`);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        localStorage.setItem("user", JSON.stringify(respone.data.user));
        setUser(respone.data.user);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate("/chat");
      }
    } catch (error) {
      toast.error(`${error.response?.data?.message || "Login failed"}`);
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="bg-green-50 min-h-screen w-full flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {/* Logo */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <img
          className="h-20 w-20 sm:h-24 sm:w-24"
          src={logo}
          alt="logo"
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text text-center">
          Welcome to Tranquilo
        </h1>
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 sm:p-8 flex flex-col gap-6">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            placeholder="Email"
            className="h-12 w-full border border-[#1DCD9F] rounded-lg px-4 outline-none focus:ring-2 focus:ring-[#1DCD9F]"
          />
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            type="password"
            placeholder="Password"
            className="h-12 w-full border border-[#1DCD9F] rounded-lg px-4 outline-none focus:ring-2 focus:ring-[#1DCD9F]"
          />
          <p className="text-xs font-semibold text-[#1DCD9F] hover:text-blue-600 cursor-pointer text-right">
            Forgot Password?
          </p>
          <button
            type="submit"
            className="h-12 w-full bg-[#1DCD9F] rounded-lg text-white font-semibold hover:bg-[#077A7D] transition duration-300 cursor-pointer"
          >
            Login
          </button>
        </form>

        <Link
          to="/signup"
          className="block text-center px-6 py-3 rounded-lg border-2 border-[#3D90D7] text-[#3D90D7] font-semibold hover:bg-[#3D90D7] hover:text-white transition duration-300 cursor-pointer"
        >
          Create New Account
        </Link>
      </div>
    </div>
  );
};

export default Login;
