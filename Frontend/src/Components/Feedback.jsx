import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import logo from "../assets/image.png";

const Feedback = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    const feedbackData = {
      fullname,
      email,
      message,
    };
  
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}api/feedback`,
        feedbackData
      );
  
      if (response.status === 201) {
        console.log("Feedback submitted successfully:", response.data);
        toast.success("Feedback submitted successfully!");
        navigate("/"); // go to home page
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Failed to submit feedback.");
    }
  };
  
  return (
    <>
      <div className="bg-green-50 h-screen flex flex-col items-center justify-center">
        <img
          className="h-[100px] w-[100px]"
          src={logo}
          alt="logo"
        />
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text">
          Feedback
        </h1>
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <input
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
            required
            type="text"
            placeholder="Full Name"
            className="h-[50px] w-[400px] border border-[#1DCD9F] rounded-lg px-4 outline-none"
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            placeholder="Email"
            className="h-[50px] w-[400px] border border-[#1DCD9F] rounded-lg px-4 outline-none"
          />
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            placeholder="Your Feedback"
            className="h-[100px] w-[400px] border border-[#1DCD9F] rounded-lg px-4 outline-none"
          ></textarea>
          <button className="h-[50px] w-[400px] bg-[#1DCD9F] rounded-lg text-white font-semibold hover:bg-[#077A7D] transition duration-300 cursor-pointer">
            Submit Feedback
          </button>
        </form>
      </div>
    </>
  );
};

export default Feedback;
