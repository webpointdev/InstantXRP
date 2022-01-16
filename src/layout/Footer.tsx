import React from "react";
import styled from "styled-components";
import SmallLogo from "../components/SmallLogo";
export const FooterContainer = styled.div`
  left: 0;
  height: 107px;
  width: 1400px;
  z-index: 999;
  transition: all 0.85s;
  @media screen and (max-width: 800px) {
    height: 250px;
  }
`;
export const SectionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  padding: 25px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    * {
      margin-bottom: 20px;
    }
  }
`;
export const FooterTitle = styled.div`
  font-size: 14px;
  color: white;
  @media screen and (max-width: 360px) {
    text-align: center;
  } ;
`;
export const ItemGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  grid-gap: 20px;
`;
export const NavbarItem = styled.a`
  text-transform: uppercase;
  font-size: 16px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid #fcba04;
    transition: all 0.85s ease-out;
  }
`;
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
