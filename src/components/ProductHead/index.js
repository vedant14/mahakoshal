import React from "react";
import ImageGallery from "react-image-gallery";
import { Wrapper } from "./styles";
import { Link } from "gatsby";

export function ProductHead({ images, title, description, downloadData }) {
  let imageArray = [];
  images.map((image) =>
    imageArray.push({ original: image.url, thumbnail: image.url })
  );

  return (
    <Wrapper className="Container">
      <div id="breadcrumb">
        <Link to="/">Home</Link> > <Link to="/products">All Products</Link> >{" "}
        <p>{title}</p>
      </div>
      <div id="grid">
        <ImageGallery
          id="image-gallery"
          items={imageArray}
          showPlayButton={false}
          lazyLoad={true}
          showNav={true}
          infinite={false}
        />
        <div id="description">
          <h2>{title}</h2>
          <p>{description}</p>
          <div id="buttons">
            <Link to="/contact-us" className="button primary-button">
              Get Quotation
            </Link>
            <a
              href={downloadData}
              target="_blank"
              rel="noreferrer"
              className="button third-button"
            >
              Download Data
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
