import React from "react";
import ImageGallery from "react-image-gallery";
import { Wrapper } from "./styles";
import { Link } from "gatsby";

export function ProductHead({ images, title, description }) {
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
          items={imageArray}
          showPlayButton={false}
          lazyLoad={true}
          showNav={false}
          thumbnailClass="thumbnail"
        />
        <div id="description">
          <h2>{title}</h2>
          <p>{description}</p>
          <div id="buttons">
            <a
              href="https://www.google.com"
              target="_blank"
              className="button primary-button"
            >
              Get Quoatation
            </a>

            <a
              href="https://www.google.com"
              target="_blank"
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
