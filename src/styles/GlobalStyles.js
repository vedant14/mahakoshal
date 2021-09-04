import { createGlobalStyle } from "styled-components";

export const colors = {
  primaryBlack: "#262626",
  washedBlack: "#4A4A4A",
  brandRed: "#FF0000",
  brandBlue: "#3732AF",
  darkGrey: "#6D7D8B",
  white: "#FFFFFF",
  lightBlue: "rgba(153, 149, 252, 0.2)",
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }


  body {
    background-color: ${colors.white}; 
    margin: 0;
    padding: 0;
  }

  main {
    margin-right: auto;
    margin-left: auto;
    min-height: 80vh;
  }


  h1{
    font-family: 'Mulish', sans-serif;    
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 30px;
    @media screen and (min-width: 768px) {
      font-size: 48px;
      line-height: 46px;
    }
  }

  h2{
    font-family: 'Mulish', sans-serif;    
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 35px;
    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 40px;
    }
  }

  h3, button{
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    @media screen and (min-width: 768px) {
      font-size: 24px;
      line-height: 30px;
    }
  }

  h4{
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 20px;
    }
  }

  p, a, li {
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
  }

  small{
    font-family: 'Mulish', sans-serif;
    font-style: normal;
    font-weight: normal;
    text-transform: uppercase;
    font-size: 14px;
    line-height: 16px;
    > a {
      font-size: 14px;
    }
  }

  a {
    font-weight: 500;
    text-decoration: none;
    color: ${colors.brandBlue};
    line-height: initial;
    &:hover {
      text-decoration: none; 
    }
  }

  button {
    border: none;
  }

  .button {
    cursor: pointer;
    transition: 0.5s;
    &:hover {
        box-shadow: 4px 5px 3px ${colors.darkGrey};
    }
  }
  .active {
    padding-bottom: 4px;
    color: ${colors.primaryBlack} !important;
    border-bottom: 3px solid ${colors.brandRed};
  }

  .brandRed{
    color: ${colors.brandRed};
  }
  .darkGrey{
    color: ${colors.darkGrey};
  }

  .Container {
    margin-left: 30px;
    margin-right: 30px;
    @media screen and (min-width: 768px) {
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (min-width: 1024px) {
      margin-left: 60px;
      margin-right: 60px;
    }
    @media screen and (min-width: 1324px) {
      margin-left: 150px;
      margin-right: 150px;
    }
    @media screen and (min-width: 1920px) {
      max-width: 1600px;
      margin-left: auto;
      margin-right: auto;
    }
  }
  .Overlay {
    position: absolute;
    background: ${colors.lightBlue};
    z-index: 10;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }


  .slick-prev:before, .slick-next:before  {
    content: '' !important;
  }
`;
