import React from "react";

const Login = () => {
  return (
    <>
      <div className="login-block">
        <input
          type="text"
          placeholder="Email"
          value={email}
          //   onChange={(e) => dispatch(setEmail(e.target.value))}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          //   onChange={(e) => dispatch(setPassword(e.target.value))}
        />
        <button onClick={handleUser}>Вход</button>
      </div>
    </>
  );
};

export default Login;
