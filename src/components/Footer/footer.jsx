import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaThumbsUp,
} from 'react-icons/fa';
// adjust path as needed

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.send(
      "service_fs7v176",
      "template_pr80fkc",
      {
        user_email: email,
        from_email: "laiba.riaz545@gmail.com"
      },
      "_QUTak-OFm_p1Dlto"
    )
    .then(() => {
      setIsSent(true);
      setEmail("");
    })
    .catch((error) => console.error("Email sending failed:", error));
  };

  return (
    <>
      <footer className="bg-[#e65100] w-full text-white px-6 lg:px-20 md:px-16 sm:px-16 pt-10 mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10">

          {/* About & Social */}
          <div className='justify-center text-center'>
            {/* Circular Logo */}
            <div className="flex justify-center mb-4">
              <img
                src='/logo.jpeg'
                alt="Artify Logo"
                className="w-20 h-20 rounded-full border-4 border-white object-cover"
              />
            </div>

            <p className="text-sm font-semibold leading-6 font-outfit">
              Artify Fine Arts is a digital platform that empowers artists to showcase and sell their artwork,
              fostering creativity while preserving cultural heritage. It connects local artists with global buyers,
              providing a seamless and accessible marketplace
            </p>

            <div className="flex gap-4 mt-10 text-2xl items-center justify-center">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="hover:text-black cursor-pointer text-4xl" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="hover:text-black cursor-pointer text-4xl" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-black cursor-pointer text-4xl" />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="hover:text-black cursor-pointer text-5xl" />
              </a>
            </div>
          </div>

          {/* Categories */}
          <div className='mt-5'>
            <h3 className="text-lg font-bold mb-3 text-center font-outfit">Categories</h3>
            <ul className="space-y-2 text-sm text-center font-outfit">
              <li>Printmaking</li>
              <li>Crafts</li>
              <li>Calligraphy and Typography</li>
              <li>Pottery and Ceramics</li>
              <li>Digital Art</li>
              <li>Painting</li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <div className="text-center">
              <h3 className="text-lg font-bold mt-5 font-outfit mb-3">Contact</h3>
              <p className="flex items-start gap-2 text-sm mb-2 justify-center font-outfit">
                <FaMapMarkerAlt className="mt-1" /> Lahore, Pakistan
              </p>
              <p className="flex items-start gap-2 text-sm mb-2 justify-center font-outfit">
                <FaPhoneAlt className="mt-1" /> (0314)7542757
              </p>
              <p className="flex items-start gap-2 text-sm justify-center font-outfit">
                <FaEnvelope className="mt-1" /> artifyplatforminfo@gmail.com
              </p>
            </div>

            <h3 className="text-lg font-bold mb-3 uppercase font-outfit mt-20 text-center">Newsletter</h3>
            {isSent ? (
              <div className="bg-black text-white w-full px-4 py-2 rounded-md flex justify-center mb-5">
                <span className="mr-2 font-outfit">Done</span> <FaThumbsUp />
              </div>
            ) : (
              <form className="flex flex-col sm:flex-row w-full gap-2 sm:gap-0 mb-5" onSubmit={sendEmail}>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-2 font-outfit sm:rounded-l-lg bg-white text-black text-sm focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-black text-white px-6 py-3 rounded-r-md font-semibold font-outfit"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-black font-outfit text-center text-white h-10 flex justify-center items-center">
        <p className="text-xs">ARTIFY ©2025 Proudly created by A&L</p>
      </div>
    </>
  );
};
