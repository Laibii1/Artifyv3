import { useState, useEffect } from "react";
import { FaToggleOn, FaToggleOff } from "react-icons/fa";
import './navbar.css';
import { motion } from "framer-motion";
import { SignIn } from "./Signin";
import { Link } from "react-router-dom";
import { useUser } from "../Contexts/UserContext";
import { Logout } from "./Logout";
import { NotificationOn } from "./Notification";
import { NotificationOff } from "./Notification";

export const DropdownSlider = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [activeComponent, setActiveComponent] = useState(false);
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const [showDropdown, setShowDropdown] = useState(true);
  const [showNotificationComponent, setShowNotificationComponent] = useState(null); // new state
  const { user } = useUser();

  useEffect(() => {
    const savedToggleState = localStorage.getItem("notificationToggle");
    if (savedToggleState !== null) {
      const parsedState = JSON.parse(savedToggleState);
      setIsToggled(parsedState);
      setShowNotificationComponent(parsedState ? "on" : "off");
    }
  }, []);

  const handleToggle = () => {
    const newState = !isToggled;
    setIsToggled(newState);
    localStorage.setItem("notificationToggle", JSON.stringify(newState));
    setShowNotificationComponent(newState ? "on" : "off");
    setShowDropdown(false); // Close the dropdown when toggled
  };

  return (
    <>
    {showDropdown && (
      <motion.div
        initial={{ x: "-100%" }}
        animate={{ x: 0 }}
        exit={{ x: "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed top-0 left-0 h-screen w-[350px] bg-black text-white p-5 shadow-lg z-50"
      >
        <div className="flex items-center space-x-4 mb-10 mt-4">
          <Link to={{ pathname: "/profile", state: { persistContent: true } }}>
            <img src={user.image} alt="Profile" className="w-10 h-10 rounded-full" />
          </Link>
          <Link to={{ pathname: "/profile", state: { persistContent: true } }}>
            <span className="font-bold font-outfit">{user.firstname} {user.lastname}</span>
          </Link>
        </div>

        <ul className="space-y-4 text-lg">
          <li>
            <Link to="/home" className="block font-outfit font-bold text-white transition-transform hover:translate-x-5.5 duration-300 hover:scale-110 hover:[text-shadow:0px_0px_10px_rgba(255,255,255,0.8)]">
              Home
            </Link>
          </li>
          <li>
            <button onClick={() => setActiveComponent(!activeComponent)} className="block font-outfit font-bold text-white transition-transform hover:translate-x-5.5 duration-300 hover:scale-110 hover:[text-shadow:0px_0px_10px_rgba(255,255,255,0.8)]">
              Sign in
            </button>
          </li>
          <li>
            <Link to="/about-us" className="block font-outfit font-bold text-white transition-transform hover:translate-x-5.5 duration-300 hover:scale-110 hover:[text-shadow:0px_0px_10px_rgba(255,255,255,0.8)]">
              About us
            </Link>
          </li>
          <li>
            <Link to="/community" className="block font-outfit font-bold text-white transition-transform hover:translate-x-5.5 duration-300 hover:scale-110 hover:[text-shadow:0px_0px_10px_rgba(255,255,255,0.8)]">
              Community Page
            </Link>
          </li>
          <li>
            <Link to="/create-profile" className="block font-outfit font-bold text-white transition-transform hover:translate-x-5.5 duration-300 hover:scale-110 hover:[text-shadow:0px_0px_10px_rgba(255,255,255,0.8)]">
              Set Profile
            </Link>
          </li>
          <li className="flex items-center justify-between font-outfit">
            <span className="block font-outfit font-bold text-white">Notification</span>
            <button
              onClick={handleToggle}
              className="w-10 h-6 items-right rounded-full transition duration-300 text-1xl sm:text-1xl lg:text-2xl cursor-pointer"
            >
              {isToggled ? <FaToggleOn /> : <FaToggleOff />}
            </button>
          </li>
          <li>
            <Link to="/history" className="block font-outfit font-bold text-white transition-transform hover:translate-x-5.5 duration-300 hover:scale-110 hover:[text-shadow:0px_0px_10px_rgba(255,255,255,0.8)]">
              History
            </Link>
          </li>
          <li>
            <button onClick={() => setShowLogoutPopup(true)} className="block font-outfit font-bold text-white transition-transform hover:translate-x-5.5 duration-300 hover:scale-110 hover:[text-shadow:0px_0px_10px_rgba(255,255,255,0.8)]">
              Log out
            </button>
          </li>
        </ul>
      </motion.div> )}

      {showLogoutPopup && (
        <>
          <div className="fixed inset-0" onClick={() => setShowLogoutPopup(false)}></div>
          <Logout onClose={() => setShowLogoutPopup(false)} />
        </>
      )}

      {activeComponent && (
        <>
          <div className="fixed inset-0 bg-white opacity-1 z-40" onClick={() => setActiveComponent(false)}></div>
          <SignIn />
        </>
      )}
         {!showDropdown && showNotificationComponent === "on" && <NotificationOn />}
         {!showDropdown && showNotificationComponent === "off" && <NotificationOff />}
     
    </>
  );
};
