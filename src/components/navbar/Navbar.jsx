import React, { useEffect } from "react";
import "./Navbar.css";
import "./icons/icons8-search-50.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authListener, handleLogout } from "../../store/auth/authActions";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  useEffect(() => {
    dispatch(authListener());
  }, []);

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
          {user ? (
            <div
              className="auth"
              onClick={() => dispatch(handleLogout(navigate))}
            >
              Sign Out
            </div>
          ) : (
            <div className="auth" onClick={() => navigate("/login")}>
              Sign In
            </div>
          )}

          {/* <div className="wishlist">mkk</div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
