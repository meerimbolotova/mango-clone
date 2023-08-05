import React from "react";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { getAuthInfo } from "../../store/auth/authActions";

const Home = () => {
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  console.log(userInfo);
  return (
    <div>
      <div className="home-back"></div>
    </div>
  );
};

export default Home;
