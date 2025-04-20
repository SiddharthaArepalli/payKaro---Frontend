import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/signup");
    } else {
      navigate(process.env.REACT_APP_DASHBOARD_URL || "/dashboard"); // Use environment variable for dashboard URL
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      <main className="flex flex-1 items-center justify-center text-center px-4 sm:px-6 py-4">
        <section className="space-y-6 sm:space-y-8 max-w-2xl sm:max-w-4xl">
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            Simplify your <span className="text-5xl sm:text-6xl text-blue-400">transactions</span> with our secure and seamless payment solutions.
          </h2>
          <p className="text-lg sm:text-xl font-light">
            PayKaro is a modern payment platform that makes transactions easy and secure.
          </p>
          <hr className="border-t border-gray-700" />
          <div className="space-y-3 sm:space-y-4">
            <button
              onClick={handleGetStarted}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black font-medium rounded hover:bg-gray-300 transition"
            >
              Get Started
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
