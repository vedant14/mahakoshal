import React from "react";
import { Wrapper, Card } from "./styles";
import Slider from "react-slick";
import { useStaticQuery, graphql } from "gatsby";
import ArrowLeft from "../../images/Landing/left-arrow.png";
import ArrowRight from "../../images/Landing/right-arrow.png";

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
  const data = useStaticQuery(graphql`
    {
      allGraphCmsNewsArticle(sort: { order: DESC, fields: publishedAt }) {
        nodes {
          title
          id
          description
          articleUrl
          coverImage {
            url
          }
        }
      }
    }
  `);
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
        {data.allGraphCmsNewsArticle.nodes.map((item) => (
          <Card
            href={item.articleUrl}
            key={item.id}
            target="_blank"
            role="button"
          >
            <img src={item.coverImage.url} alt="NewsImage" />
            <h4> {item.title}</h4>
            <p>{item.description}</p>
          </Card>
        ))}
      </Slider>
    </Wrapper>
  );
}
