import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loginData = {
      email: email,
      password: password,
    };

    try {
      const respone = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/users/login`,
        loginData
      );
      if(respone.status === 200) {
        console.log("User logged in successfully:", respone.data);
        toast.success(`${respone.data.message}`);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        localStorage.setItem("user",JSON.stringify(respone.data.user));
        setUser(respone.data.user);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        navigate("/chat");
      }
    } catch (error) {
      toast.error(`${error.response.data.message}`);
      console.error("Error during login:", error);
    }
  }

  return (
    <div className="bg-green-50 h-screen w-full px-10 py-40 flex flex-col justify-center items-center gap-6">
      <img
        className="h-[100px] w-[100px]"
        src="./src/assets/image.png"
        alt="logo"
      />
      <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text">
        Welcome to Tranquilo
      </h1>
      <div>
        <form
          onSubmit={handleSubmit}>
          <div className="flex flex-col gap-4">
            <input
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              placeholder="Email"
              className="h-[50px] w-[400px] border border-[#1DCD9F] rounded-lg px-4 outline-none"
            />
            <input
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              placeholder="Password"
              className="h-[50px] w-[400px] border border-[#1DCD9F] rounded-lg px-4 outline-none"
            />
            <p className="text-xs font-semibold text-[#1DCD9F] hover:text-blue-600 cursor-pointer">
              Forget Password
            </p>
            <button className="h-[50px] w-[400px] bg-[#1DCD9F] rounded-lg text-white font-semibold hover:bg-[#077A7D] transition duration-300 cursor-pointer">
              Login
            </button>
            <button className="h-[50px] w-[400px]  rounded-lg border-2 border-[#3D90D7] text-[#3D90D7] font-semibold hover:bg-[#3D90D7] hover:text-white transition duration-300 cursor-pointer">
              Create New Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
