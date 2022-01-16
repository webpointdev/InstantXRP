import React from "react";
import styled from "styled-components";
import Logo from "../asserts/logo/small_logo.png";
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  img {
    color: white;
  }
`;
export const LogoTitle = styled.span`
  font-size: 24px;
  color: white;
  b {
    color: #fcc235;
  }
`;
const SmallLogo = () => {
  return (
    <LogoContainer>
      <img src={Logo} alt="logo" width="47px" height="auto" draggable="false" />
      <LogoTitle>
        InstantXRP<b>V2</b>
      </LogoTitle>
    </LogoContainer>
  );
};

export default SmallLogo;
