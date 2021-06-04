import React from "react";
import "../../assets/styles/page1styles/slider.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import CardDeck from "react-bootstrap/CardDeck";

export default function Slider({ title, subTitle, cardData }) {
  return (
    <div className="slider__container">
      <div className="slider__main">
        <div className="slider__heading">
          <div className="slider__heading_left">
            <div className="phase__icon__container">
              <div className="phase__icon"></div>
            </div>
            <div className="slider__heading__title">
              <h3>{title}</h3>
              <h5>{subTitle}</h5>
            </div>
          </div>
          <div className="slider__heading_right"></div>
        </div>
        <div className="slider__sliderCards">
          <Carousel interval={null}>
            <Carousel.Item>
              <CardDeck>
                {cardData.map((val, index) => {
                  if (index >= 0 && index <= 3) {
                    return (
                      <div key={index} className="card">
                        <div className="flag__img"></div>
                        <div className="flag__img__small"></div>
                        <h3>{val.title}</h3>
                        <h5>{val.subtitle}</h5>
                        <hr style={{ width: "150px", color: "lightgray" }} />
                        <div className="card__footer">
                          <div className="card__footer__left">
                            <h2>{val.phase}</h2>
                            <span style={{ backgroundColor: "#fff" }}>
                              Phase
                            </span>
                          </div>
                          <div className="card__footer__right">
                            <h2>{val.contributors}</h2>
                            <span style={{ backgroundColor: "#fff" }}>
                              Contributors
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </CardDeck>
            </Carousel.Item>
            <Carousel.Item>
              <CardDeck>
                {cardData.map((val, index) => {
                  if (index >= 4 && index <= 7) {
                    return (
                      <div key={index} className="card">
                        <div className="flag__img"></div>
                        <div className="flag__img__small"></div>
                        <h3>{val.title}</h3>
                        <h5>{val.subtitle}</h5>
                        <hr style={{ width: "150px", color: "lightgray" }} />
                        <div className="card__footer">
                          <div className="card__footer__left">
                            <h2>{val.phase}</h2>
                            <span style={{ backgroundColor: "#fff" }}>
                              Phase
                            </span>
                          </div>
                          <div className="card__footer__right">
                            <h2>{val.contributors}</h2>
                            <span style={{ backgroundColor: "#fff" }}>
                              Contributors
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </CardDeck>
            </Carousel.Item>
            <Carousel.Item>
              <CardDeck>
                {cardData.map((val, index) => {
                  if (index >= 8 && index <= 11) {
                    return (
                      <div key={index} className="card">
                        <div className="flag__img"></div>
                        <div className="flag__img__small"></div>
                        <h3>{val.title}</h3>
                        <h5>{val.subtitle}</h5>
                        <hr style={{ width: "150px", color: "lightgray" }} />
                        <div className="card__footer">
                          <div className="card__footer__left">
                            <h2>{val.phase}</h2>
                            <span style={{ backgroundColor: "#fff" }}>
                              Phase
                            </span>
                          </div>
                          <div className="card__footer__right">
                            <h2>{val.contributors}</h2>
                            <span style={{ backgroundColor: "#fff" }}>
                              Contributors
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </CardDeck>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
