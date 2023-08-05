import React from "react";
import "./Register.css";
import { useDispatch, useSelector } from "react-redux";
import { setEmail, setPassword } from "../../store/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { handleSignUp } from "../../store/auth/authActions";

const Register = () => {
  const { email, password } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUser = () => {
    const obj = {
      email,
      password,
      navigate,
    };

    dispatch(handleSignUp(obj));
  };

  return (
    <>
      <div className="register-block">
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        <button onClick={handleUser}>Регистрация</button>
        <div>
          <span>У вас уже есть аккаунт?</span>
          <span className="signIn" onClick={() => navigate("/login")}>
            Войти
          </span>
        </div>
      </div>
    </>
  );
};

export default Register;
