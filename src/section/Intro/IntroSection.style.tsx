import styled from "styled-components";

export const IntroSectionContainer = styled.div`
  .background_image {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: -1;
    object-fit: none;
    transition: all 0.85s;
    @media screen and (max-width: 1300px) {
      opacity: 0.5;
    }
    @media screen and (max-width: 1100px) {
      opacity: 0.3;
    }
  }
`;
export const IntroContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  .Logo_image {
    max-width: 478px;
    width: 100%;
    height: auto;
    opacity: 0.8;
  }
  @media screen and (max-width: 1210px) {
    position: relative;
    transition: all 0.85s;
  }
  @media screen and (max-width: 750px) {
    .Logo_image {
      width: 350px !important;
      height: auto;
    }
  }
  @media screen and (max-width: 580px) {
    text-align: center;
    .Logo_image {
      width: 250px !important;
      height: auto;
    }
  }
`;
export const LeftTitle = styled.div`
  text-align: right;
  font-size: 54px;
  color: white;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.85s;
  @media screen and (max-width: 1440px) {
    margin-right: -50px;
    font-size: 40px;
    transition: all 0.85s;
  }
  @media screen and (max-width: 1210px) {
    position: absolute;
    top: 150px;
    left: 20%;
    z-index: 999;
    transition: all 0.85s;
  }
  @media screen and (max-width: 750px) {
    left: 0;
    top: 100px;
  }
`;
export const RightTitle = styled.div`
  color: #fcba04;
  text-align: left;
  font-size: 54px;
  font-weight: 700;
  text-transform: uppercase;
  transition: all 0.85s;
  @media screen and (max-width: 1440px) {
    margin-left: -50px;
    font-size: 40px;
    transition: all 0.85s;
  }
  @media screen and (max-width: 1210px) {
    position: absolute;
    bottom: 150px;
    right: 20%;
    z-index: 999;
    transition: all 0.85s;
  }
  @media screen and (max-width: 750px) {
    right: 0;
    bottom: 100px;
  }
`;
