import { ForgotPasswordFlow } from "./ForgetPass";
import "./navbar.css";
import { motion } from "framer-motion";
import { useState } from "react";
import { Register } from "./Register";
import { auth, googleProvider, signInWithPopup } from "/src/firebase/firebase.js"; // Adjust path if needed

export const SignIn = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showSignIn, setShowSignIn] = useState(true);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const doSignInWithEmailAndPassword = async (email, password) => {
    try {
      // Replace this with your actual sign-in logic (already provided as placeholder)
      console.log("Signing in with email:", email, "and password:", password);
    } catch (error) {
      console.error("Sign-in error:", error);
      alert("Failed to sign in");
    }
  };

  const handleSignIn = async () => {
    if (isSigningIn) return;
    setIsSigningIn(true);
    try {
      await doSignInWithEmailAndPassword(email, password);
      alert("Signed in successfully");
    } catch (error) {
      console.error("Sign-in error:", error);
      alert("Sign-in failed");
    } finally {
      setIsSigningIn(false);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Signed in with Google:", user);
      alert("Signed in with Google!");
    } catch (error) {
      console.error("Google Sign-in Error:", error);
      alert("Google sign-in failed");
    }
  };

  return (
    <>
      {showSignIn ? (
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

                <div>
                  <label className="block text-sm font-outfit font-medium mb-1">
                    Email address *
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                    placeholder="Enter email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-outfit font-medium mb-1">
                    Password *
                  </label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div
                    className="text-right text-sm text-gray-500 mt-1 hover:underline cursor-pointer"
                    onClick={() => setShowForgotPassword(true)}
                  >
                    forgot password?
                  </div>
                </div>

                <button
                  type="button"
                  disabled={isSigningIn}
                  className="btn-submit"
                  onClick={handleSignIn}
                >
                  {isSigningIn ? "Signing In..." : "Sign In"}
                </button>

                <div className="flex items-center justify-center gap-2">
                  <hr className="w-full border-gray-300" />
                  <span className="text-sm text-gray-500">OR</span>
                  <hr className="w-full border-gray-300" />
                </div>

                {/* Google Sign-in Button */}
                <button
                  onClick={handleGoogleSignIn}
                  className="w-full bg-black text-white py-2 rounded-md font-semibold transition-all duration-300 hover:bg-black hover:scale-105"
                >
                  Continue with Google
                </button>

                <p className="text-sm text-center">
                  Don’t have an account?{" "}
                  <span
                    onClick={() => setShowSignIn(false)}
                    className="text-black font-semibold underline cursor-pointer"
                  >
                    Create your account
                  </span>
                </p>
              </div>

              {/* Right Section */}
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
        <Register />
      )}
    </>
  );
};
