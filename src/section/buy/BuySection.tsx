import React from "react";
import {
  BuySectionContainer,
  BuyTitle,
  BuyDescription,
} from "./BuySection.styled";
import Buy_back from "../../asserts/background/second_section.png";
import Rect from "../../asserts/Rectangle.png";
import Form from "../../components/Form";
const BuySection = () => {
  return (
    <BuySectionContainer>
      <img src={Buy_back} className="back_img" alt="buy" draggable="false" />
      <Form />
      <BuyTitle id="aboutus">
        <span>InstantXRP V2</span> is the best option for the investors
      </BuyTitle>
      <BuyDescription>
        Institutional ICO & token listing. An ICO service going from planning
        and execution of ICO campaign to providing ICO token liquidity via
        listing on CryptiBIT at the outset of the ICO. Listing of currencies
        following a technical selection process.
      </BuyDescription>
      <img src={Rect} className="Rect_img" alt="Rect" draggable="false" />
    </BuySectionContainer>
  );
};

export default BuySection;
