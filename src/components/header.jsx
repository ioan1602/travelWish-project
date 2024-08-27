import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "./../css/header.css";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <Link to="/" className="link-logo">
          <img src="/logo.png" alt="Logo" /> TravelWish
        </Link>
      </div>
      <nav
        className={isMobile ? "nav-links-mobile" : "nav-links"}
        onClick={() => setIsMobile(false)}
      >
        <Link to="/">Home</Link>
        <Link to="/favorites">Favorites</Link>
      </nav>
      <button
        className="mobile-menu-icon"
        onClick={() => setIsMobile(!isMobile)}
      >
        {isMobile ? <FaTimes /> : <FaBars />}
      </button>
    </header>
  );
};

export default Header;
