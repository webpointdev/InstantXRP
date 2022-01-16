import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import SmallLogo from "../components/SmallLogo";
import { ImMenu } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
export const NavbarContainer = styled.div`
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.85s;
  @media screen and (max-width: 530px) {
    justify-content: center;
  }
  .logo {
    color: white;
    font-size: 30px;
    @media screen and (max-width: 530px) {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .close_logo {
    color: white;
    font-size: 30px;
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .mark {
    cursor: pointer;
    :hover {
      transition: all 0.85s ease-in-out;
      transform: scale(1.1);
    }
  }
`;
export const NavbarItemGroupDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  * {
    margin: 0 20px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  } ;
`;
export const NavbarItemGroupMobile = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    height: 1000px;
    z-index: 9999999;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 30px 50px;
    * {
      margin: 10px 0;
    }
  } ;
`;
export const NavbarItem = styled.a`
  text-transform: uppercase;
  font-size: 16px;
  color: white;
  text-decoration: none !important;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid #fcba04;
    transition: all 0.85s ease-out;
  }
`;
const Navbar = () => {
  const [showNavbar, setshowNavbar] = useState(false);
  const handleScreenChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setshowNavbar(false);
    } else {
      setshowNavbar(true);
    }
  };
  useEffect(() => {
    let window_width = window.matchMedia("(max-width:901px)");
    window_width.addListener(handleScreenChange);
    handleScreenChange(window_width);
    return () => {
      window_width.removeListener(handleScreenChange);
    };
  }, []);
  const handleChange = () => {
    setshowNavbar(!showNavbar);
  };
  return (
    <NavbarContainer>
      <div className="mark">
        <SmallLogo />
      </div>
      <NavbarItemGroupDesktop>
        <NavbarItem href="#aboutus">About us</NavbarItem>
        <NavbarItem href="#tokenomics">Tokenomics</NavbarItem>
        <Button width={107} height={35} content="connect" fSize={14} />
      </NavbarItemGroupDesktop>
      {showNavbar ? (
        <NavbarItemGroupMobile>
          <NavbarItem href="#aboutus">About us</NavbarItem>
          <NavbarItem href="#tokenomics">Tokenomics</NavbarItem>
          <Button width={107} height={35} content="connect" fSize={14} />
          <div className="close_logo" onClick={() => handleChange()}>
            <AiOutlineClose />
          </div>
        </NavbarItemGroupMobile>
      ) : (
        <div className="logo" onClick={() => handleChange()}>
          <ImMenu />
        </div>
      )}
    </NavbarContainer>
  );
};

export default Navbar;
