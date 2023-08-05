import React, { useEffect, useState } from "react";
import "./Navbar.css";
import image from "./icons/icons8-search-50.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  authListener,
  changeEmail,
  changePassword,
  getAuthInfo,
  handleLogout,
} from "../../store/auth/authActions";
import {
  setChangeEmailError,
  setChangePasswordError,
} from "../../store/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const { user, userInfo, changeEmailError, changePasswordError } = useSelector(
    (state) => state.auth
  );
  console.log(changeEmailError);
  const [userEmail, setUserEmail] = useState(user);
  const [userPassword, setUserPassword] = useState("");
  useEffect(() => {
    dispatch(authListener());
  }, []);
  const getInfo = () => {
    dispatch(getAuthInfo());
    setShowModal(true);
    setUserEmail(user);
    setUserPassword("");
    setChangeEmailError("");
    setChangePasswordError("");
  };
  return (
    <div className="navbar-block">
      <div className="navbar-list">
        <div className="navbar-products" onClick={() => navigate("products")}>
          Женские
        </div>
        <div className="navbar-logo">
          <img
            src="https://st.mngbcn.com/images/headerNew/logos/mango.svg"
            alt="logo"
          />
        </div>
        <div className="navbar-auth">
          <div className="search">
            {user ? (
              <div className="auth" onClick={getInfo}>
                Профиль
              </div>
            ) : (
              <></>
            )}
          </div>
          {user ? (
            <div
              className="auth"
              onClick={() => dispatch(handleLogout(navigate))}
            >
              Выйти
            </div>
          ) : (
            <div className="auth" onClick={() => navigate("/login")}>
              Войти
            </div>
          )}
        </div>
        <div onClick={() => navigate("/admin")}>Админ</div>
      </div>
      {showModal && (
        <div className="profile-modal-block">
          <button
            className="btn-close-profModal"
            onClick={() => setShowModal(false)}
          >
            X
          </button>
          <div>
            <img src={image} alt="" />
            <span>{userInfo}</span>
          </div>
          <br />
          <br />
          <div>
            <span>Изменить почту</span>
          </div>
          <div>
            <input
              type="text"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
            />
            <button onClick={() => dispatch(changeEmail(userEmail))}>
              Изменить
            </button>
          </div>
          <div>{changeEmailError && <span>{changeEmailError}</span>}</div>

          <br />
          <br />
          <div>
            <span>Изменить пароль</span>
          </div>
          <div>
            <input
              type="text"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <button onClick={() => dispatch(changePassword(userPassword))}>
              Изменить
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
