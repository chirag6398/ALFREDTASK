import React from "react";
import "../../styles/footerp1.css";
export default function Footer() {
  return (
    <div className="footer__container">
      <span>©2021 Duolingo</span>

      <button className="footer__btn">About</button>
      <button className="footer__btn">Terms</button>
      <button className="footer__btn">Guidelines</button>
      <button className="footer__btn">Privacy</button>
      <button className="footer__btn">Jobs</button>
      <button className="footer__btn">Twitter</button>
      <button className="footer__btn">Facebook</button>
    </div>
  );
}
