// Import and component code remains the same
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";

export const ForgotPasswordFlow = () => {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handleResetPassword = () => {
    if (!validatePassword(password)) {
      setErrorMessage(
        "Password must be at least 8 characters, include a capital letter and a number."
      );
      return;
    }

    if (password !== confirmPassword) {
      setPasswordMismatch(true);
      setErrorMessage("Passwords do not match");
      return;
    }

    setPasswordMismatch(false);
    setErrorMessage("");
    setStep(4);
  };

  const validatePassword = (pwd) => {
    const lengthCheck = pwd.length >= 8;
    const alphanumericCheck = /[A-Za-z]/.test(pwd) && /[0-9]/.test(pwd);
    const capitalLetterCheck = /[A-Z]/.test(pwd);
    return lengthCheck && alphanumericCheck && capitalLetterCheck;
  };

  const isValidEmail = (email) => {
    const basicCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const allowedDomains = ["gmail.com", "outlook.com"];
    const domain = email.split("@")[1];
    return basicCheck && allowedDomains.includes(domain);
  };

  const handleSendCode = () => {
    if (!isValidEmail(email)) {
      setErrorMessage("Enter a valid email ending with @gmail.com or @outlook.com");
      return;
    }
    setErrorMessage("");
    setStep(2);
  };

  return (
    <motion.div
      initial={{ y: "-10%" }}
      animate={{ y: 0 }}
      exit={{ y: "-10%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                 border-2 bg-white text-black p-6 shadow-lg z-50 rounded-xl w-[90%] max-w-md"
    >
      {/* Error Message */}
      <AnimatePresence>
        {errorMessage && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-4 bg-red-100 text-red-700 px-4 py-2 rounded-md text-sm text-center"
          >
            {errorMessage}
          </motion.div>
        )}
      </AnimatePresence>

      {/* STEP 1: Enter Email */}
      {step === 1 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center">Forgot Password</h2>
          <input
            type="email"
            className="w-full border px-4 py-2 rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-full bg-black text-white py-2 rounded-md hover:bg-[#D7521D]"
            onClick={handleSendCode}
          >
            Send Code
          </button>
        </div>
      )}

      {/* STEP 2: Enter Verification Code */}
      {step === 2 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center">Enter Verification Code</h2>
          <input
            type="text"
            maxLength="5"
            className="w-full border px-4 py-2 rounded-md text-center tracking-widest"
            placeholder="12345"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
          <div
            className="text-sm text-right text-blue-500 hover:underline cursor-pointer"
            onClick={() => setErrorMessage("Code resent!")}
          >
            Resend Code
          </div>
          <button
            className="w-full bg-black text-white py-2 rounded-md hover:bg-[#D7521D]"
            onClick={() => setStep(3)}
          >
            Verify
          </button>
        </div>
      )}

      {/* STEP 3: Set New Password */}
      {step === 3 && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-center">Reset your password again</h2>

          <div>
            <label className="text-sm font-medium">Password*</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border px-4 py-2 rounded-md"
                placeholder="*********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium">Confirm password*</label>
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                className={`w-full border px-4 py-2 rounded-md ${
                  passwordMismatch ? "border-red-500" : ""
                }`}
                placeholder="*********"
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setPasswordMismatch(false);
                  setErrorMessage("");
                }}
              />
              <span
                className="absolute right-3 top-3 cursor-pointer"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            {passwordMismatch && (
              <p className="text-red-500 text-sm mt-1">Passwords do not match</p>
            )}
          </div>

          <button
            className="w-full bg-[#D7521D] text-white py-2 rounded-md hover:bg-black"
            onClick={handleResetPassword}
          >
            Reset Password
          </button>
        </div>
      )}

      {/* STEP 4: Success */}
      {step === 4 && (
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="text-4xl bg-black text-white rounded-full p-3 shadow-md flex items-center justify-center">
            <FaCheck />
          </div>
          <h2 className="text-lg font-semibold text-center">
            Password reset successfully!
          </h2>
        </div>
      )}
    </motion.div>
  );
};
