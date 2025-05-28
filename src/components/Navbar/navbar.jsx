// import { useEffect, useState } from "react";
// import { FaBars, FaShoppingBag } from "react-icons/fa"; // removed FaSearch
// import './navbar.css';
// import { DropdownSlider } from './MenuDropdownSlider';
// import { UserDropdown } from "./userButton";
// import { useUser } from '../Contexts/UserContext'; // Import useUser hook
// import { Link } from "react-router-dom";


// export const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [isDropdownOpen, setDropdownIsOpen] = useState(false);

//   const { user } = useUser(); // Get user data

//   return (
//     <header className="sticky top-0 w-full h-[70px] bg-white shadow-md sm:h-[80px] md:h-[90px] lg:h-[100px] z-20">
//       <div className="max-w-[1440px] h-full mx-auto px-6 lg:px-16 py-4 flex items-center justify-between transition-[motion-preset-slide-right]">
//         <div className="flex items-center gap-4">
//           {/* Left: logo */}
//           <Link to="/home" className="text-black text-1xl sm:text-1xl lg:text-2xl hover:opacity-80 cursor-pointer">
//             <img src='/logo.jpeg' className="rounded-full border-1 w-[40px] h-[40px]" />
//           </Link>

//           {/* Menu Button */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="text-black text-1xl sm:text-1xl lg:text-2xl cursor-pointer"
//           >
//             <FaBars />
//           </button>
//         </div>

//         {/* Center: Brand Name */}
//         <div className="text-black text-2xl font-rammetto sm:text-4xl lg:text-5xl tracking-wide">
//           <a href="./">Artify Cloth</a>
//         </div>

//         {/* Right: Icons */}
//         <div className="flex items-center gap-4">
         

//           {/* Cart Button */}
//           <Link
//             to="/cart"
//             className="text-black text-1xl sm:text-1xl lg:text-2xl hover:opacity-80 animate-wiggle cursor-pointer"
//           >
//             <FaShoppingBag />
//           </Link>

//           {/* User Profile Image */}
//           <button
//             onClick={() => setDropdownIsOpen(!isDropdownOpen)}
//             className="text-black text-1xl sm:text-1xl lg:text-2xl hover:opacity-80 cursor-pointer focus:outline-none animate-wiggle"
//           >
//             <img
//               src={user.image}
//               alt="User"
//               className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full object-cover"
//             />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-white opacity-50 z-40"
//             onClick={() => setMenuOpen(false)}
//           ></div>
//           <DropdownSlider />
//         </>
//       )}

//       {/* Dropdown Menu */}
//       {isDropdownOpen && (
//         <>
//           <div
//             className="fixed inset-0 bg-white opacity-1 z-40"
//             onClick={() => setDropdownIsOpen(false)}
//           ></div>
//           <UserDropdown />
//         </>
//       )}
//     </header>
//   );
// };



import { useState, useEffect } from "react";
import { FaBars, FaShoppingBag } from "react-icons/fa";
import './navbar.css';
import { DropdownSlider } from './MenuDropdownSlider';
import { UserDropdown } from "./userButton";
import { useUser } from '../Contexts/UserContext';
import { Link } from "react-router-dom";
import Web3 from 'web3';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownIsOpen] = useState(false);

  const { user } = useUser();

  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [ethBalance, setEthBalance] = useState("");
  const [showWalletPopup, setShowWalletPopup] = useState(false);

  const detectCurrentProvider = () => {
    if (window.ethereum) {
      return window.ethereum;
    } else if (window.web3) {
      return window.web3.currentProvider;
    } else {
      console.log("Non-Ethereum browser detected. Install MetaMask.");
    }
  };

  const onConnect = async () => {
    try {
      const provider = detectCurrentProvider();
      if (provider) {
        await provider.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(provider);
        const accounts = await web3.eth.getAccounts();
        const account = accounts[0];
        const balance = await web3.eth.getBalance(account);
        const ethBalance = web3.utils.fromWei(balance, "ether");
        setWalletAddress(account);
        setEthBalance(ethBalance);
        setIsConnected(true);
        setShowWalletPopup(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const onDisconnect = () => {
    setIsConnected(false);
    setWalletAddress("");
    setEthBalance("");
    setShowWalletPopup(false);
  };

  return (
    <header className="navbar-header">
      <div className="navbar-container">
        {/* Left: Logo & Menu */}
        <div className="navbar-left">
          <Link to="/home">
            <img src='/logo.jpeg' className="navbar-logo" />
          </Link>
          <button onClick={() => setMenuOpen(!menuOpen)} className="navbar-icon">
            <FaBars />
          </button>
        </div>

        {/* Center: Brand */}
        <div className="navbar-title">
          <a href="./">Artify Cloth</a>
        </div>

        {/* Right: MetaMask + Cart + User */}
        <div className="navbar-right">
          {!isConnected && (
            <button onClick={onConnect} className="metamask-button">
              Login with MetaMask
            </button>
          )}

          {isConnected && (
            <button onClick={() => setShowWalletPopup(true)} className="metamask-connected">
              Wallet Connected
            </button>
          )}

          <Link to="/cart" className="navbar-icon">
            <FaShoppingBag />
          </Link>

          <button onClick={() => setDropdownIsOpen(!isDropdownOpen)} className="navbar-icon">
            <img src={user.image} alt="User" className="navbar-user-img" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div className="navbar-overlay" onClick={() => setMenuOpen(false)}></div>
          <DropdownSlider />
        </>
      )}

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <>
          <div className="navbar-overlay" onClick={() => setDropdownIsOpen(false)}></div>
          <UserDropdown />
        </>
      )}

      {/* Wallet Popup */}
      {showWalletPopup && (
        <div className="wallet-popup">
          <div className="wallet-popup-inner">
            <h3>Wallet Details</h3>
            <p><strong>Address:</strong> {walletAddress}</p>
            <p><strong>Balance:</strong> {ethBalance} ETH</p>
            <button onClick={onDisconnect} className="wallet-disconnect">
              Disconnect
            </button>
            <button onClick={() => setShowWalletPopup(false)} className="wallet-close">
              Close
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
