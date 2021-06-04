import React from "react";
import "../../styles/aboutp2.css";
import img1 from "../../images/PersenP2.svg";
import img2 from "../../images/FunImgP2.svg";
import img3 from "../../images/Persen2P2.svg";
import img4 from "../../images/Persen3P2.svg";
export default function About() {
  return (
    <div className="about__container">
      <div className="about__main">
        <div className="about__heading">
          <h2>About Us</h2>
        </div>
        <div className="about__nav">
          <button className="about__btn">MISSION</button>
          <button className="about__btn">APPROACH</button>
          <button className="about__btn">TEAM</button>
          <button className="about__btn">CAREERS</button>
          <button className="about__btn">RESEARCH</button>
          <button className="about__btn">PRESS</button>
          <button className="about__btn">CONTACT US</button>
        </div>
        <div className="about__main_content">
          <div className="about__img">
            <img src={img1} alt="loading..." />
          </div>
          <div className="about__description">
            <h2>Personalized education.</h2>
            <p>
              Everyone learns in different ways. For the first time in history,
              we can analyze how millions of people learn at once to create the
              most effective educational system possible and tailor it to each
              student.
            </p>

            <p>
              Our ultimate goal is to give everyone access to a private tutor
              experience through technology.
            </p>
          </div>
        </div>
        <div className="about__main_content">
          <div className="about__description">
            <h2>Making learning fun.</h2>
            <p>
              It's hard to stay motivated when learning online, so we made
              Duolingo so fun that people would prefer picking up new skills
              over playing a game.
            </p>
          </div>
          <div className="about__img">
            <img src={img2} alt="loading..." />
          </div>
        </div>
        <div className="about__main_content">
          <div className="about__description">
            <h2>Universally accessible.</h2>
            <p>
              There are over 1.2 billion people learning a language and the
              majority are doing so to gain access to better opportunities.
              Unfortunately, learning a language is expensive and inaccessible
              to most.
            </p>

            <p>
              We created Duolingo so that everyone could have a chance. Free
              language education – no hidden fees, no premium content, just
              free.
            </p>
            <p>
              Duolingo is used by the richest man in the world and many
              Hollywood stars, and at the same time by public schools students
              in developing countries. We believe true equality is when spending
              more can't buy you a better education.
            </p>
          </div>
        </div>
        <div className="about__main_content">
          <img src={img4} alt="loading..." />
          <img src={img3} alt="loading..." />
        </div>
        <hr />
      </div>
    </div>
  );
}
