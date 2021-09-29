import React from "react";
import { Wrapper, ClientImage } from "./styles";
import { useStaticQuery, graphql } from "gatsby";
import Slider from "react-slick";
function HiddenNextArrow() {
  return <div style={{ display: "none" }} />;
}
function HiddenPrevArrow() {
  return <div style={{ display: "none" }} />;
}

export function Clients() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    cssEase: "linear",
    nextArrow: <HiddenNextArrow />,
    prevArrow: <HiddenPrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          speed: 1000,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };
  const ClientImages = useStaticQuery(graphql`
    {
      allGraphCmsClient {
        nodes {
          id
          clientLogo {
            url
            fileName
          }
        }
      }
    }
  `);
  return (
    <Wrapper className="Container">
      <h4>
        <span className="darkGrey">Clients we’ve helped in the past </span>
        <span className="brandRed">50 years</span>
      </h4>
      <Slider {...settings}>
        {ClientImages.allGraphCmsClient.nodes.map((image) => (
          <ClientImage
            src={image.clientLogo.url}
            alt={image.clientLogo.fileName}
            key={image.id}
          />
        ))}
      </Slider>
    </Wrapper>
  );
}
