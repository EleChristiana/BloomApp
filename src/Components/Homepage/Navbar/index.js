// Navbar.js
import style from "../Navbar/style.module.css";
import React from "react";
import profile from "../../../Assets/profile.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className={style.navbar}>
      <ul className={style.nav}>
        <li className="nav-item">
          <a href="#" className={style.navhome}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            Online Booking
          </a>
        </li>
        <li className="nav-item">
          <Link to="/services" className={style.navlink}>
            Services
          </Link>
        </li>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            Stores
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            Blog
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className={style.navlink}>
            Contact Us
          </a>
        </li>
      </ul>
      <img src={profile} alt="profileimage" className={style.profile} />
    </nav>
  );
};

export default Navbar;
