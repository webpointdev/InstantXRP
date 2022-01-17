import React from "react";
import SmallLogo from "../components/SmallLogo";
import {
  FooterContainer,
  SectionContent,
  FooterTitle,
  ItemGroup,
  NavbarItem,
} from "./layout.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <SectionContent>
        <SmallLogo />
        <FooterTitle>Copyright@ instandXRPV2 All rights reserved.</FooterTitle>
        <ItemGroup>
          <NavbarItem href="#aboutus">About us</NavbarItem>
          <NavbarItem href="#tokenomics">Tokenomics</NavbarItem>
        </ItemGroup>
      </SectionContent>
    </FooterContainer>
  );
};

export default Footer;
