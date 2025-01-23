import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
  };

  const handleNavigateToRegister = () => {
    navigate("/registration");
  };

  const handleNavigateToForgetPassword = () => {
    navigate("/forget-password");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-red-500 to-orange-500">
      <div className="grid grid-cols-3 gap-6 rounded-lg shadow-md w-full max-w-5xl p-8 ">
        {/* Left Column: Logo/Title */}
        <div className="col-span-1 flex flex-col items-center justify-center  rounded-lg p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">StockVision</h1>
        </div>

        {/* Right Column: Image and Form */}
        <div className="col-span-2 grid grid-rows-2 gap-6 flex justify-around">
          {/* Image */}
          <div className="flex items-center justify-center">
            <img
              src="src/assets/images/login-page.jpg"
              alt="Inventory Management Illustration"
              className="object-cover rounded-lg shadow"
            />
          </div>

          {/* Login Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
              Login
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Username Field */}
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Username
                </label>
                <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                  <span className="px-3 text-gray-500">
                    <FaUser />
                  </span>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 focus:outline-none"
                    placeholder="Enter your username"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Password
                </label>
                <div className="flex items-center border border-gray-300 rounded-md focus-within:ring-2 focus-within:ring-blue-500">
                  <span className="px-3 text-gray-500">
                    <FaLock />
                  </span>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 focus:outline-none"
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="px-3 text-gray-500 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Login
              </button>
            </form>

            {/* Additional Links */}
            <div className="flex flex-col items-center mt-6">
              <button
                onClick={handleNavigateToRegister}
                className="text-sm text-blue-500 hover:text-blue-600 focus:outline-none"
              >
                Don't have an account? Register
              </button>
              <button
                onClick={handleNavigateToForgetPassword}
                className="text-sm text-blue-500 hover:text-blue-600 focus:outline-none mt-2"
              >
                Forgot Password?
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
