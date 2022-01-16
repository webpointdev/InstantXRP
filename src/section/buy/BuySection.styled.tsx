import styled from "styled-components";
export const BuySectionContainer = styled.div`
  .back_img {
    position: absolute;
    left: -300px;
    top: 126vh;
    opacity: 0.7;
    background-color: linear-gradient(90deg, #000, transparent);
    z-index: -1;
    transition: all 0.85s;
    @media screen and (max-width: 1300px) {
      opacity: 0.5;
    }
    @media screen and (max-width: 1100px) {
      opacity: 0.3;
    }
    @media screen and (max-width: 980px) {
      display: none !important;
    }
  }
  .Rect_img {
    position: absolute;
    right: 0;
    margin-top: -250px;
    @media screen and (max-width: 786px) {
      margin-top: -150px;
      width: 500px;
      z-index: -1 !important;
    }
    @media screen and (max-width: 600px) {
      margin-top: -200px;
      width: 400px;
      z-index: -1 !important;
    }
  }
`;
export const BuyTitle = styled.div`
  margin-top: 200px;
  font-size: 43px;
  color: #fff;
  font-weight: 600;
  max-width: 700px;
  span {
    color: #fcba04;
  }
  @media screen and (max-width: 860px) {
    text-align: center !important ;
  }
`;
export const BuyDescription = styled.div`
  margin-top: 20px;
  line-height: 20px;
  max-width: 700px;
  color: #fff;
  font-size: 16px;
  @media screen and (max-width: 860px) {
    text-align: center !important;
  }
`;
