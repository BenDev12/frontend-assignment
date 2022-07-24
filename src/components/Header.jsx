import React from "react";
import logo from "../data/logo.png";

function Header() {
  return (
    <header className="Header">
      <img src={logo} alt="logo" />
      <p>Welcome to Wakello Express Logistics </p>
    </header>
  );
}

export default Header;
