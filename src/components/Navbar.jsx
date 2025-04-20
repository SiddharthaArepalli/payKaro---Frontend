import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token);
  }, [location.pathname]);

  const handleSignOut = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/signin");
  };

  return (
    <nav className="flex justify-between items-center px-6 py-2 bg-black text-white">
      <div
        className="text-3xl py-2 px-4 font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        PayKaro
      </div>
      <button
        onClick={isAuthenticated ? handleSignOut : () => navigate("/signin")}
        className="px-4 py-2 bg-white text-black font-medium rounded hover:bg-gray-300 transition"
      >
        {isAuthenticated ? "Sign Out" : "Sign In"}
      </button>
    </nav>
  );
};

export default Navbar;
