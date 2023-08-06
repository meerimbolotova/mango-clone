import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearErrors, setEmail, setPassword } from "../../store/auth/authSlice";
import { handleLogin } from "../../store/auth/authActions";
import "./Login.css";
const Login = () => {
  const { email, password, emailError, passwordError } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUser = () => {
    const obj = {
      email,
      password,
      navigate,
    };
    dispatch(handleLogin(obj));
  };
  return (
    <>
      <div className="login-block">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        {emailError && <span>{emailError}</span>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        {passwordError && <span>{passwordError}</span>}

        <button onClick={handleUser}>Вход</button>
        <div>
          <span>У вас нет аккаунта?</span>
          <span className="signUp" onClick={() => navigate("/register")}>
            Регистрация
          </span>
        </div>
      </div>
    </>
  );
};

export default Login;
