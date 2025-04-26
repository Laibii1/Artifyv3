import { useState } from "react";
import { FaBars, FaSearch, FaShoppingBag } from "react-icons/fa"; // removed FaUser
import './navbar.css';
import { DropdownSlider } from './MenuDropdownSlider';
import { UserDropdown } from "./userButton";
import { SearchBar } from "./searchBar";
import { useUser } from '../Contexts/UserContext'; // Import useUser hook
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownIsOpen] = useState(false);
  const [IsSearchOpen, setSearchIsOpen] = useState(false);

  const { user } = useUser(); //  Get user data

  return (
    <header className="sticky top-0 w-full h-[70px] bg-white shadow-md sm:h-[80px] md:h-[90px] lg:h-[100px] z-20">
      <div className="max-w-[1440px] h-full mx-auto px-6 lg:px-16 py-4 flex items-center justify-between transition-[motion-preset-slide-right]">
        <div className="flex items-center gap-4">
          {/* Left: logo */}
          <Link to="/home" className="text-black text-1xl sm:text-1xl lg:text-2xl hover:opacity-80 cursor-pointer">
            <img src='/logo.jpeg' className="rounded-full border-1 w-[40px] h-[40px]" />
          </Link>

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-black text-1xl sm:text-1xl lg:text-2xl cursor-pointer"
          >
            <FaBars />
          </button>
        </div>

        {/* Center: Brand Name */}
        <div className="text-black text-2xl font-rammetto sm:text-4xl lg:text-5xl tracking-wide">
          <a href="./">Artify Cloth</a>
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-4">
          {/* Search Button */}
          <button
            onClick={() => setSearchIsOpen(!IsSearchOpen)}
            className="text-black text-1xl sm:text-1xl lg:text-2xl hover:opacity-80 animate-wiggle cursor-pointer"
          >
            <FaSearch />
          </button>

          {/* Cart Button */}
          <Link
            to="/cart"
            className="text-black text-1xl sm:text-1xl lg:text-2xl hover:opacity-80 animate-wiggle cursor-pointer"
          >
            <FaShoppingBag />
          </Link>

          {/* User Profile Image */}
          <button
            onClick={() => setDropdownIsOpen(!isDropdownOpen)}
            className="text-black text-1xl sm:text-1xl lg:text-2xl hover:opacity-80 cursor-pointer focus:outline-none animate-wiggle"
          >
            <img
              src={user.image}
              alt="User"
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-6 md:h-6 lg:w-8 lg:h-8 rounded-full object-cover"
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <>
          <div
            className="fixed inset-0 bg-white opacity-50 z-40"
            onClick={() => setMenuOpen(false)}
          ></div>
          <DropdownSlider />
        </>
      )}

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <>
          <div
            className="fixed inset-0 bg-white opacity-1 z-40"
            onClick={() => setDropdownIsOpen(false)}
          ></div>
          <UserDropdown />
        </>
      )}

      {/* Search Bar */}
      {IsSearchOpen && (
        <>
          <SearchBar />
        </>
      )}
    </header>
  );
};
