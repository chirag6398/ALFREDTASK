import React from "react";
import { useHistory } from "react-router-dom";
import "../../assets/styles/page2styles/footer.css";
export default function Footer() {
  const history = useHistory();
  return (
    <div className="footer2__container">
      <div className="footer2__content">
        <button
          onClick={() => {
            history.push("/page2");
          }}
        >
          ABOUT
        </button>
        <button>BLOG</button>
        <button>SCHOOLS</button>
        <button>APPS</button>
        <button>HELP</button>
        <button>GUIDELINES</button>
        <button
          onClick={() => {
            history.push("/page3");
          }}
        >
          CAREERS
        </button>
        <button>TERMS</button>
        <button>PRIVACY</button>
      </div>
    </div>
  );
}
