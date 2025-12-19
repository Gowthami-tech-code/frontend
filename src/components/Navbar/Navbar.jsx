import React, { useState } from "react";
import "./Navbar.css";  
import { AiOutlineShoppingCart } from "react-icons/ai";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="logo">Ecommerce Website</div>

      <nav className={isOpen ? "nav-links active" : "nav-links"}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/services">Services</a>
        <a href="/contact">Contact</a>
        <Link to="/cart">
        <div style={{ fontSize: "28px", cursor: "pointer",color:"#ffffff"}}>
            <AiOutlineShoppingCart />
        </div>
        </Link>
      </nav>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Navbar;
