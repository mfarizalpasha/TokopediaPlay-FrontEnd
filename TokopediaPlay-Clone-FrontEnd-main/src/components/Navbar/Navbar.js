import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isLogin, setIsLive] = useState(false);

  const toggleLive = () => {
    setIsLive(!isLogin);
  };

  return (
    <nav className="navbar">
      <h1>Play</h1>
      <button onClick={toggleLive}>{isLogin ? "Login" : "Register"}</button>
    </nav>
  );
}

export default Navbar;
