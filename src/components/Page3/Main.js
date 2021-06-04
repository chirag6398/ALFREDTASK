import React from "react";
import "../../assets/styles/page3styles/main.css";
import { AiOutlineDown } from "react-icons/ai";
import { GiUsaFlag } from "react-icons/gi";
export default function Main() {
  return (
    <div className="main__container">
      <div className="main__content">
        <div className="main__heading">
          <h2>Language Courses for English Speakers</h2>
          <span>
            I speak english <AiOutlineDown style={{ marginLeft: "20px" }} />
          </span>
        </div>
        <div className="main__card__container">
          <div className="main__cards">
            <div className="main_card">
              <div className="main__flag__img">
                <GiUsaFlag style={{ fontSize: "45px", color: "red" }} />
              </div>
              <h4>Spanish</h4>
              <span>26.5 M Learners </span>
            </div>
          </div>
          <div className="main__cards">
            <div className="main_card">
              <div className="main__flag__img">
                <GiUsaFlag style={{ fontSize: "45px", color: "red" }} />
              </div>
              <h4>Spanish</h4>
              <span>26.5 M Learners </span>
            </div>
          </div>
          <div className="main__cards">
            <div className="main_card">
              <div className="main__flag__img">
                <GiUsaFlag style={{ fontSize: "45px", color: "red" }} />
              </div>
              <h4>Spanish</h4>
              <span>26.5 M Learners </span>
            </div>
          </div>
          <div className="main__cards">
            <div className="main_card">
              <div className="main__flag__img">
                <GiUsaFlag style={{ fontSize: "45px", color: "red" }} />
              </div>
              <h4>Spanish</h4>
              <span>26.5 M Learners </span>
            </div>
          </div>
          <div className="main__cards">
            <div className="main_card">
              <div className="main__flag__img">
                <GiUsaFlag style={{ fontSize: "45px", color: "red" }} />
              </div>
              <h4>Spanish</h4>
              <span>26.5 M Learners </span>
            </div>
          </div>
          <div className="main__cards">
            <div className="main_card">
              <div className="main__flag__img">
                <GiUsaFlag style={{ fontSize: "45px", color: "red" }} />
              </div>
              <h4>Spanish</h4>
              <span>26.5 M Learners </span>
            </div>
          </div>
          <div className="main__cards">
            <div className="main_card">
              <div className="main__flag__img">
                <GiUsaFlag style={{ fontSize: "45px", color: "red" }} />
              </div>
              <h4>Spanish</h4>
              <span>26.5 M Learners </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
