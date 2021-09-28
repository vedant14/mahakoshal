import { createGlobalStyle } from "styled-components";

export const colors = {
  primaryBlack: "#262626",
  washedBlack: "#4A4A4A",
  brandRed: "#FF0000",
  brandBlue: "#3732AF",
  darkGrey: "#6D7D8B",
  white: "#FFFFFF",
  lightBlue: "rgba(153, 149, 252, 0.42)",
};

export const GlobalStyles = createGlobalStyle`
  :root {
    --site-max-width: 1200px;
  }


  body {
    background-color: ${colors.white}; 
    font-family: 'Mulish', sans-serif;
    margin: 0;
    padding: 0;
  }

  main {
    margin-right: auto;
    margin-left: auto;
    min-height: 80vh;
  }


  h1{
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
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 35px;
    @media screen and (min-width: 768px) {
      font-size: 32px;
      line-height: 40px;
    }
  }

  h3{
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
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 20px;
    }
  }

  p, a, li, th, td, label, input, textarea {
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 16px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 22px;
    }
  }

  li {
    margin-top: 10px;
  }

  small{
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
    line-height: initial;
    color: inherit;
    &:hover {
      text-decoration: none; 
    }
  }

  .hover-effect::after, .hover-effect-100::after{
    content: '';
    display: block;
    width: 0;
    margin-top: 3px;
    height: 3px;
    background: ${colors.brandRed};
    transition: width .5s;
  }


  .hover-effect:hover::after {
    width: 50%;
    /*//transition: width .3s;*/
  }


  .hover-effect-100:hover::after {
    width: 100%;
    /*//transition: width .3s;*/
  }

  button {
    border: none;
  }

  .button {
    cursor: pointer;
    transition: 0.5s;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    @media screen and (min-width: 768px) {
      font-size: 18px;
      line-height: 20px;
    }
    &:hover {
        box-shadow: 4px 5px 3px ${colors.darkGrey};
    }
  }

  .primary-button, .secondary-button, .third-button {
    padding: 15px 40px;
    border-radius: 4px;
  }


  .primary-button{
    color: ${colors.white};
    background: ${colors.brandBlue};
  }

  .secondary-button{
    color: ${colors.brandBlue};
    background: ${colors.white};
  }

  .third-button{
    background: ${colors.lightBlue};
    color: ${colors.brandBlue}; 
  }

  .active {
    color: ${colors.primaryBlack} !important;
  }

  .active::after{
    content: '';
    margin-top: 3px;
    display: block;
    width: 100%;
    height: 3px;
    background: ${colors.brandRed};
    transition: width .5s;
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

  .react-tabs > ul{
    text-align: center;
  }

  .tabs {
    background: ${colors.lightBlue};
    list-style: none;
    display: inline-flex;
    margin-right: 15px;
    padding: 10px 25px;
    border-radius: 2px;
    border-top-right-radius: 10px !important;
    cursor: pointer;
    transition: .5s;
  }


  .active-tab {
    background: ${colors.brandBlue};
    color: ${colors.white};
  }


  .slide-in-section {
    opacity: 0;
    transform: translateX(-20vh);
    visibility: hidden;
    will-change: opacity, visibility;
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
    transition-delay: 0.1s
  }

  .is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }

    .fade-in-slow-section {
    opacity: 0;
    transform: translateY(10vh);
    visibility: hidden;
    transition: opacity 1s ease-out, transform 1s ease-out;
    will-change: opacity, visibility;
    transition-delay: 0.5s;
  }
  

  table {
    border: 1px solid ${colors.darkGrey};
    border-radius: 10px;
    margin: 10px auto;
    border-collapse: collapse;
    text-align: center;
    > tr, > tbody > tr {
        border-bottom: 1px solid ${colors.darkGrey};
    }
    > tr > th{
      background: ${colors.brandBlue};
      color: ${colors.white};
    }
     > tr > th , > tr > td {
        padding: 25px 30px;
        > a {
          color: ${colors.brandBlue};
        }
    }
  }

  .slick-prev:before, .slick-next:before  {
    content: '' !important;
  }
`;
