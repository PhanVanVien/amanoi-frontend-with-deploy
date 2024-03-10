// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="stroke" id="mainNav">
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li className="dropdown">
          <a href="">Profile</a>
          <div className="dropdown-content">
            <a href="/account">Account</a>
            <a href="/">History</a>
          </div>
        </li>
        <li>
          <a href="/about">About Us</a>
        </li>
        <li>
          <a href="/items">Items</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
