import React from "react";
import image from "../../asserts/background/first_section.png";
import logo from "../../asserts/logo/big_logo.png";
import {
  IntroSectionContainer,
  IntroContent,
  LeftTitle,
  RightTitle,
} from "./IntroSection.style";
const IntroSection = () => {
  return (
    <IntroSectionContainer>
      <img
        src={image}
        alt="image"
        className="background_image"
        draggable="false"
      />
      <IntroContent>
        <LeftTitle>welcome to</LeftTitle>
        <img src={logo} alt="logo" className="Logo_image" draggable="false" />
        <RightTitle>instantxrpv2</RightTitle>
      </IntroContent>
    </IntroSectionContainer>
  );
};

export default IntroSection;
