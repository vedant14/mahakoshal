import React from "react";
import { Wrapper } from "./styles";
import Slider from "react-slick";
import ArrowLeft from "../../images/Landing/left-arrow.png";
import ArrowRight from "../../images/Landing/right-arrow.png";
import Dummy from "../../images/Landing/Dummy.png";
function CustomNextArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`right-arrow ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={ArrowRight} alt="arrow_right" />
    </div>
  );
}
function CustomPrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`left-arrow ${className}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <img src={ArrowLeft} alt="arrow_left" />
    </div>
  );
}

export function News() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 500,
    autoplaySpeed: 1000,
    cssEase: "linear",
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
        },
      },
    ],
  };
  return (
    <Wrapper className="Container">
      <h1>Featured in News</h1>
      <Slider {...settings} className="custom-slide">
        <div className="card">
          <img src={Dummy} alt="New" />
          <h4> Mahakoshal in news today, following covid safety</h4>
          <p>
            Amidst the pandemic, there are still people who take necessary
            precations to fight the virus
          </p>
        </div>
        <div className="card">
          <img src={Dummy} alt="New" />
          <h4> Mahakoshal in news today, following covid safety</h4>
          <p>
            Amidst the pandemic, there are still people who take necessary
            precations to fight the virus
          </p>
        </div>
        <div className="card">
          <img src={Dummy} alt="New" />
          <h4> Mahakoshal in news today, following covid safety</h4>
          <p>
            Amidst the pandemic, there are still people who take necessary
            precations to fight the virus
          </p>
        </div>
        <div className="card">
          <img src={Dummy} alt="New" />
          <h4> Mahakoshal in news today, following covid safety</h4>
          <p>
            Amidst the pandemic, there are still people who take necessary
            precations to fight the virus
          </p>
        </div>
        <div className="card">
          <img src={Dummy} alt="New" />
          <h4> Mahakoshal in news today, following covid safety</h4>
          <p>
            Amidst the pandemic, there are still people who take necessary
            precations to fight the virus
          </p>
        </div>
        <div className="card">
          <img src={Dummy} alt="New" />
          <h4> Mahakoshal in news today, following covid safety</h4>
          <p>
            Amidst the pandemic, there are still people who take necessary
            precations to fight the virus
          </p>
        </div>
        <div className="card">
          <img src={Dummy} alt="New" />
          <h4> Mahakoshal in news today, following covid safety</h4>
          <p>
            Amidst the pandemic, there are still people who take necessary
            precations to fight the virus
          </p>
        </div>
        <div className="card">
          <img src={Dummy} alt="New" />
          <h4> Mahakoshal in news today, following covid safety</h4>
          <p>
            Amidst the pandemic, there are still people who take necessary
            precations to fight the virus
          </p>
        </div>
      </Slider>
    </Wrapper>
  );
}
