import { ForgotPasswordFlow } from './ForgetPass';
import './navbar.css';
import { motion } from "framer-motion";
import { useState } from "react";
import { Register } from './Register'; // Import Register component

export const SignIn = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true); // State to manage whether SignIn or Register is shown

  return (
    <>
      {showSignIn ? (
        // SignIn component
        !showForgotPassword ? (
          <motion.div
            initial={{ y: "-10%" }}
            animate={{ y: 0 }}
            exit={{ y: "-10%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-4/8 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 bg-white text-black p-5 shadow-lg z-50 rounded-xl overflow-hidden max-w-4xl h-[600px] w-[90%]"
          >
            <div className="flex flex-col md:flex-row">
              {/* Form */}
              <div className="w-full md:w-1/2 p-8 space-y-5">
                <h2 className="text-2xl font-semibold font-outfit mb-4">Sign in</h2>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-outfit font-medium mb-1">Email address *</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                    placeholder="Enter email"
                  />
                </div>

                {/* Password Input */}
                <div>
                  <label className="block text-sm font-outfit font-medium mb-1">Password *</label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                    placeholder="Enter password"
                  />
                  <div
                    className="text-right text-sm text-gray-500 mt-1 hover:underline cursor-pointer"
                    onClick={() => setShowForgotPassword(true)}
                  >
                    forgot password?
                  </div>
                </div>

                {/* Submit Button */}
                <button className="w-full bg-black text-white py-2 rounded-md font-semibold transition-all duration-300 hover:bg-[#D7521D] hover:scale-105">
                  Submit
                </button>

                {/* Divider */}
                <div className="flex items-center justify-center gap-2">
                  <hr className="w-full border-gray-300" />
                  <span className="text-sm text-gray-500">OR</span>
                  <hr className="w-full border-gray-300" />
                </div>

                {/* Social Buttons */}
                <button className="w-full bg-black text-white py-2 rounded-md font-semibold transition-all duration-300 hover:bg-black hover:scale-105">
                  Continue with Google
                </button>
                <button className="w-full bg-black text-white py-2 rounded-md font-semibold transition-all duration-300 hover:bg-black hover:scale-105">
                  Continue with Facebook
                </button>

                {/* Create Account */}
                <p className="text-sm text-center">
                  Don’t have an account?{" "}
                  <span
                    onClick={() => setShowSignIn(false)} // Switch to Register component on click
                    className="text-black font-semibold underline cursor-pointer"
                  >
                    Create your account
                  </span>
                </p>
              </div>

              {/* Right Section - Image */}
              <div className="w-full md:w-1/2">
                <img
                  src="/Plate.jpeg"
                  alt="Plate"
                  className="h-full w-full object-cover rounded-tr-xl rounded-br-xl"
                />
              </div>
            </div>
          </motion.div>
        ) : (
          <ForgotPasswordFlow onBack={() => setShowForgotPassword(false)} />
        )
      ) : (
        // Register component will be displayed when showSignIn is false
        <Register />
      )}
    </>
  );
};
