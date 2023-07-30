import React from "react";
import "./Navbar.css";
import "./icons/icons8-search-50.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar-block">
      <div className="navbar-list">
        <div className="navbar-products">Женские</div>
        <div className="navbar-logo">
          <img
            src="https://st.mngbcn.com/images/headerNew/logos/mango.svg"
            alt="logo"
          />
        </div>
        <div className="navbar-auth">
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
          <div className="auth" onClick={() => navigate("/register")}>
            Sign Up
          </div>
          {/* <div className="wishlist">mkk</div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
