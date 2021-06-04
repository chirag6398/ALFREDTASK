import React from "react";
import "../../assets/styles/page1styles/nav.css";
import logo from "../../assets/images/incubator-logo.svg";
export default function Nav() {
  return (
    <div className="nav__Container">
      <div className="nav__logo">
        <img src={logo} alt="logo.." />
      </div>
      <div className="nav__right">
        <button>Login</button>
      </div>
    </div>
  );
}
