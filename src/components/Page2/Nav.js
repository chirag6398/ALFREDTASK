import React from "react";
import "../../assets/styles/page2styles/nav.css";
import logo from "../../assets/images/navLogo2.svg";
export default function Nav() {
  return (
    <div className="nav2__container">
      <div className="nav2__logo">
        <img src={logo} alt="logo.." />
      </div>
      <div className="nav2__right">
        <button className="nav2__btn loginBtn">Login</button>
        <button className="nav2__btn startedBtn">Get started</button>
      </div>
    </div>
  );
}
