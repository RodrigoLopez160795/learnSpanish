import React from "react";
import { Link } from "react-router-dom";
import cards from "../../helpers/cards";
import carouselImage from "../../helpers/carouselImage";
const Cards = () => {
  const { card1, card2, card3, card4 } = cards;
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide cardsContainer__main"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://www.canadianbusiness.com/wp-content/uploads/2018/04/iStock-615737466-2.jpg"
            style={{ height: 500 }}
            className="d-block w-100"
            alt="First slide"
          />
          <div
            className="carousel-caption d-none d-md-block"
            style={{
              color: "blue",
              fontSize: "25px",
              fontWeight: "900",
              textShadow: "white 0 -2px",
            }}
          >
            <h1>{card1.title}</h1>
            <p>{card1.paragraph}</p>
            <Link to="/learnMore/card1">
              <button className="cards__button" id="card__button1">
                {card1.buttonText}
              </button>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={carouselImage.card2}
            style={{ height: 500 }}
            className="d-block w-100"
            alt="Second slide"
          />
          <div
            className="carousel-caption d-none d-md-block"
            style={{
              color: "rgb(50,24,64)",
              fontSize: "27px",
              fontWeight: "900",
              textShadow: "lightgreen 0 -2px",
            }}
          >
            <h1 style={{ fontWeight: "bolder" }}>{card2.title}</h1>
            <p>{card2.paragraph}</p>
            <Link to="/learnMore/card2">
              <button className="cards__button" id="card__button2">
                {card2.buttonText}
              </button>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="https://scx2.b-cdn.net/gfx/news/hires/2021/i-was-astonished-at-ho.jpg"
            style={{ height: 500 }}
            className="d-block w-100"
            alt="Third slide"
          />
          <div
            className="carousel-caption d-none d-md-block"
            style={{
              color: "black",
              fontSize: "25px",
              fontWeight: "900",
              textShadow: "lightblue 0 -2px",
            }}
          >
            <h1>{card3.title}</h1>
            <p>{card3.paragraph}</p>
            <Link to="/learnMore/card3">
              <button className="cards__button" id="card__button3">
                {card3.buttonText}
              </button>
            </Link>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={carouselImage.card4}
            style={{ height: 500 }}
            className="d-block w-100"
            alt="Fourth slide"
          />
          <div
            className="carousel-caption d-none d-md-block"
            style={{
              color: "black",
              fontSize: "25px",
              fontWeight: "900",
              textShadow: "white 0 -2px",
            }}
          >
            <h1>{card4.title}</h1>
            <p>{card4.paragraph}</p>
            <Link to="/learnMore/card4">
              <button className="cards__button" id="card__button4">
                {card4.buttonText}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev "
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"

      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Cards;
