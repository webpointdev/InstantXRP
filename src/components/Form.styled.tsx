import styled from "styled-components";
export const FormContainer = styled.div`
  border-width: 3px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #fcba04, rgba(0, 0, 0, 0)) 1 100%;
  background-color: #0c1e29;
  border-radius: 5px;
  display: grid;
  grid-template-columns: 2.5fr 3fr;
  padding: 63px 20px 44px 56px;
  max-width: 1100px;
  max-height: 300px;
  margin: auto;
  z-index: 999;
  position: relative;
  ::before {
    content: "";
    width: 100%;
    top: -3px;
    height: 3px;
    background-color: #fcba04;
    position: absolute;
  }
  @media screen and (max-width: 1200px) {
    display: flex !important;
    flex-direction: column !important ;
    padding: 0 !important;
    align-items: center !important;
    max-height: 500px !important;
  }
  @media screen and (max-width: 720px) {
    padding: auto 20px auto 20px;
  }
`;
export const BlanceBlock = styled.div`
  font-size: 28px;
  text-transform: uppercase;
  color: #fff;
  padding: 10px auto;
  div {
    font-weight: 600;
    color: #fcba04;
    width: 200px;
    word-wrap: break-word;
  }

  margin-right: 50px;
  border-right: 2px solid #0f2838;
  @media screen and (max-width: 1200px) {
    border-style: none !important;
    text-align: center !important;
    margin: 30px 0 !important;
  }
`;
export const BuyBlock = styled.div`
  font-size: 28px;
  text-transform: uppercase;
  color: #fff;
  display: flex;
  width: 100%;
  flex-direction: column;
  * {
    grid-gap: 20px;
  }
  @media screen and (max-width: 1200px) {
    align-items: center !important;
  }
`;
