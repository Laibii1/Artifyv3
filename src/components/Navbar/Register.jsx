import './navbar.css';
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { FaCheck, FaEye, FaEyeSlash } from "react-icons/fa";
import { SignIn } from './Signin';
import { Link } from 'react-router-dom';

export const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    roles: [],
  });

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(true);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const rolesList = ['Artists', 'Buyer', 'Collaborator'];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const toggleRole = (role) => {
    const updatedRoles = formData.roles.includes(role)
      ? formData.roles.filter((r) => r !== role)
      : [...formData.roles, role];

    setFormData({ ...formData, roles: updatedRoles });
  };

  const validatePassword = (password) => {
    const hasUpperCase = /[A-Z]/.test(password);
    const isAlphanumeric = /^[a-zA-Z0-9]+$/.test(password);
    return password.length >= 8 && hasUpperCase && isAlphanumeric;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { password } = formData;

    if (!validatePassword(password)) {
      setError('Password must be at least 8 characters, alphanumeric, and contain at least one capital letter.');
      return;
    }

    setError('');
    console.log('Form submitted:', formData);

    setShowRegisterForm(false);
    setShowSuccessPopup(true);
  };

  const handleSignInClick = () => {
    setShowSignIn(true);
    setShowRegisterForm(false);
  };

  return (
    <>
      {showSignIn ? (
        <SignIn />
      ) : (
        <>
          {showRegisterForm && (
            <motion.div
              initial={{ y: '-10%' }}
              animate={{ y: 0 }}
              exit={{ y: '-10%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="fixed top-3/5 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 bg-white text-black p-5 shadow-lg z-50 rounded-xl overflow-hidden max-w-4xl h-[600px] w-[90%]"
            >
              <div className="flex flex-col md:flex-row justify-between items-start p-6 bg-white rounded-xl max-w-4xl mx-auto">
                <form onSubmit={handleSubmit} className="w-full md:w-1/2 space-y-4">
                  <h2 className="text-2xl font-outfit font-bold mb-4">Create an account</h2>

                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
                    required
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone number*"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Email address *"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border rounded-lg focus:outline-none focus:ring"
                    required
                  />

                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      placeholder="Password*"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full p-3 border rounded-lg focus:outline-none focus:ring pr-10"
                      required
                    />
                    <span
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-[#716865]"
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    {rolesList.map((role) => (
                      <button
                        type="button"
                        key={role}
                        onClick={() => toggleRole(role)}
                        className={`border-2 px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-colors duration-300
                          ${formData.roles.includes(role)
                            ? 'bg-[#D7521D] text-white border-[#D7521D]'
                            : 'bg-white text-black border-gray-300'}`}
                      >
                        <div
                          className={`w-3 h-3 rounded-lg ${formData.roles.includes(role) ? 'bg-white' : 'bg-[#D7521D]'}`}
                        />
                        {role}
                      </button>
                    ))}
                  </div>

                  {error && <p className="text-red-500">{error}</p>}

                  <button
                    type="submit"
                    className="w-full bg-black text-white font-outfit font-bold py-3 rounded-lg hover:opacity-90 transition-all duration-300 hover:bg-[#D7521D] hover:scale-105"
                  >
                    Submit
                  </button>

                  <p className="text-sm font-outfit font-semibold text-center mt-2">
                    Already had an account?{' '}
                    <span
                      onClick={handleSignInClick}
                      className="text-grey-500 cursor-pointer font-outfit font-bold"
                    >
                      Sign In
                    </span>
                  </p>
                </form>

                <div className="w-full h-full md:w-1/2 mt-6 md:mt-0 md:pl-6">
                  <img
                    src="./Plate.jpeg"
                    alt="Decorative Plate"
                    className="rounded-xl w-full h-[500px]"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {showSuccessPopup && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white p-10 rounded-xl shadow-xl z-50 text-center max-w-sm w-full">
              <div className="flex items-center justify-center mb-4">
                <div className="text-4xl bg-white text-black rounded-full p-3">
                  <FaCheck />
                </div>
              </div>
              <h2 className="text-2xl font-bold font-outfit mb-2">Congratulations!</h2>
              <p className="mb-6 font-outfit">Your account has been created successfully</p>
              <Link to="/create-profile">
                <button
                  onClick={() => setShowSuccessPopup(false)}
                  className="hover:bg-[#D7521D] font-outfit bg-black border-white border-1 hover:border-0 shadow-[#D7521D] shadow-sm text-white px-6 py-2 rounded-lg text-lg mr-2 transition duration-300 hover:scale-105"
                >
                  Set Profile
                </button>
              </Link>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="bg-black font-outfit border-1 border-white hover:shadow-sm hover:shadow-white text-white px-10 py-2 rounded-lg text-lg ml-2 transition duration-300 hover:scale-105"
              >
                Skip
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
};
