import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Wrapper, Card } from "./styles";

import Comma from "../../images/Landing/Comma.png";
import ArrowLeft from "../../images/Landing/left-arrow.png";
import ArrowRight from "../../images/Landing/right-arrow.png";

export function Testimony() {
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const data = useStaticQuery(graphql`
    {
      allGraphCmsTestimonial {
        nodes {
          id
          author
          designation
          location
          testimonialText
        }
      }
    }
  `);
  const testimonialCount = data.allGraphCmsTestimonial.nodes.length;
  console.log(testimonialCount);
  const handleNextTestimonial = () => {
    if (currentTestimonial + 1 >= testimonialCount) {
      setCurrentTestimonial(0);
    } else {
      setCurrentTestimonial(currentTestimonial + 1);
    }
  };
  const handlePrevTestimonial = () => {
    if (currentTestimonial === 0) {
      setCurrentTestimonial(testimonialCount - 1);
    } else {
      setCurrentTestimonial(currentTestimonial - 1);
    }
  };

  return (
    <Wrapper
      className={`Container fade-in-section  ${isVisible ? "is-visible" : ""}`}
      ref={domRef}
    >
      <h1>For the past 50 years</h1>
      <p>We had the previledge to serve some very best customers</p>
      <Card key={data.allGraphCmsTestimonial.nodes[currentTestimonial].id}>
        <div id="text">
          <h3>
            <img src={Comma} alt="Comma" />
            {
              data.allGraphCmsTestimonial.nodes[currentTestimonial]
                .testimonialText
            }
          </h3>
          <div id="button">
            <button
              onClick={() => handlePrevTestimonial({ currentTestimonial })}
            >
              <img src={ArrowLeft} alt="arrow-left" />
            </button>
            <button
              onClick={() => handleNextTestimonial({ currentTestimonial })}
            >
              <img src={ArrowRight} alt="arrow-right" />
            </button>
          </div>
        </div>
        <div id="author">
          <h3>
            {data.allGraphCmsTestimonial.nodes[currentTestimonial].author}
          </h3>
          <h4>
            {data.allGraphCmsTestimonial.nodes[currentTestimonial].designation}
          </h4>
          <h4>
            {data.allGraphCmsTestimonial.nodes[currentTestimonial].location}
          </h4>
        </div>
      </Card>
      <div id="mobile-button">
        <button onClick={() => handlePrevTestimonial({ currentTestimonial })}>
          <img src={ArrowLeft} alt="arrow-left" />
        </button>
        <button onClick={() => handleNextTestimonial({ currentTestimonial })}>
          <img src={ArrowRight} alt="arrow-right" />
        </button>
      </div>
    </Wrapper>
  );
}
