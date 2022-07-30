import React from "react";
import logo from "../data/logo.png";
// component holds the top menu
function Header() {
  return (
    <header className="Header">
      <img src={logo} alt="logo" />
      <p>Welcome to Wakello Express Logistics </p>
    </header>
  );
}

export default Header;
