import React from "react";
import MainRoutes from "./routes/MainRoutes";
import Navbar from "./components/navbar/Navbar";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <MainRoutes />
    </div>
  );
};

export default App;
