import React from "react";
import "../../assets/styles/page1styles/footer.css";
import { useHistory } from "react-router-dom";
export default function Footer() {
  const history = useHistory();
  return (
    <div className="footer__container">
      <span>©2021 Duolingo</span>

      <button
        className="footer__btn"
        onClick={() => {
          history.push("/page2");
        }}
      >
        About
      </button>
      <button className="footer__btn">Terms</button>
      <button className="footer__btn">Guidelines</button>
      <button className="footer__btn">Privacy</button>
      <button className="footer__btn">Jobs</button>
      <button className="footer__btn">Twitter</button>
      <button className="footer__btn">Facebook</button>
    </div>
  );
}
