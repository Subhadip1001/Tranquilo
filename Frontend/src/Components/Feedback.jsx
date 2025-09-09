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
    const feedbackData = { fullname, email, message };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}api/feedback`,
        feedbackData
      );

      if (response.status === 201) {
        console.log("Feedback submitted successfully:", response.data);
        toast.success("Feedback submitted successfully!");
        navigate("/"); // redirect to home
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      toast.error("Failed to submit feedback.");
    }
  };

  return (
    <div className="bg-green-50 min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      {/* Logo & Title */}
      <div className="flex flex-col items-center gap-2 mb-6">
        <img
          className="h-20 w-20 sm:h-24 sm:w-24"
          src={logo}
          alt="logo"
        />
        <h1 className="text-3xl sm:text-4xl font-extrabold bg-gradient-to-r from-[#1DCD9F] to-[#4BBFD4] text-transparent bg-clip-text text-center">
          Feedback
        </h1>
      </div>

      {/* Feedback Form */}
      <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-6 sm:p-8">
        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
          <input
            value={fullname}
            onChange={(event) => setFullname(event.target.value)}
            required
            type="text"
            placeholder="Full Name"
            className="h-12 w-full border border-[#1DCD9F] rounded-lg px-4 outline-none focus:ring-2 focus:ring-[#1DCD9F]"
          />
          <input
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
            type="email"
            placeholder="Email"
            className="h-12 w-full border border-[#1DCD9F] rounded-lg px-4 outline-none focus:ring-2 focus:ring-[#1DCD9F]"
          />
          <textarea
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            required
            placeholder="Your Feedback"
            rows={4}
            className="w-full border border-[#1DCD9F] rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-[#1DCD9F] resize-none"
          ></textarea>
          <button
            type="submit"
            className="h-12 w-full bg-[#1DCD9F] rounded-lg text-white font-semibold hover:bg-[#077A7D] transition duration-300 cursor-pointer"
          >
            Submit Feedback
          </button>
        </form>
      </div>
    </div>
  );
};

export default Feedback;