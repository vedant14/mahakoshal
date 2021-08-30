import React from "react"
import Slider from "react-slick"
import { Wrapper } from "./styles"
import Comma from "../../images/Landing/Comma.png"
import { useStaticQuery, graphql } from "gatsby"

function HiddenNextArrow() {
  return <div style={{ display: "none" }} />
}
function HiddenPrevArrow() {
  return <div style={{ display: "none" }} />
}

export function Testimonials() {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(frontmatter: { type: { eq: "testimonial" } }) {
        frontmatter {
          testimonials {
            text
            author
            id
            location
            designation
          }
        }
      }
    }
  `)
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    speed: 2500,
    autoplaySpeed: 8000,
    nextArrow: <HiddenNextArrow />,
    prevArrow: <HiddenPrevArrow />,
  }
  return (
    <Wrapper className="Container">
      <h1>For the past 50 years</h1>
      <p>We had the previledge to serve some very best customers</p>
      <Slider {...settings} className="custom-slide">
        {data.markdownRemark.frontmatter.testimonials.map(item => (
          <div className="card" key={item.id}>
            <div>
              <h3>
                <img src={Comma} alt="Comma" />
                {item.text}
              </h3>
              <div className="author">
                <h3>{item.author}</h3>
                <h4>{item.designation}</h4>
                <h4>{item.location}</h4>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </Wrapper>
  )
}
