import styled from "styled-components";
export const TokenomicsContainer = styled.div`
  .back_img {
    position: absolute;
    right: 0;
    z-index: -1;
    opacity: 0.5;
    margin-top: -350px;
  }
  transition: all 0.85s;
`;
export const TokenomicsContent = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 400px;
`;
export const TokenomicsTitle = styled.div`
  font-size: 43px;
  color: #fcba04;
  font-weight: 600;
  text-transform: uppercase;
`;
export const TokenomicsDescription = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: #fff;
  max-width: 508px;
  text-align: center;
`;
export const TokenomicsFuncGroup = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  @media screen and (max-width: 1195px) {
    width: 100% !important;
  }
  @media screen and (max-width: 1000px) {
    flex-direction: column !important;
  }
`;
export const TokenomicsFunc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  text-align: center;
  color: #fff;
  img {
    color: #fcba04;
    width: 80px;
    height: 80px;
    align-self: center;
  }
  b {
    font-size: 16px;
  }
  span {
    font-size: 14px;
    max-width: 300px;
  }
  @media screen and (max-width: 1000px) {
    margin-bottom: 50px !important;
  }
`;
