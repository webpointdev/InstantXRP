import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import SmallLogo from "../components/SmallLogo";
import { ImMenu } from "react-icons/im";
import { AiOutlineClose } from "react-icons/ai";
import { notification } from "antd";
import {
  NavbarContainer,
  NavbarItemGroupDesktop,
  NavbarItemGroupMobile,
  NavbarItem,
} from "./layout.styled";

const Navbar = () => {
  const [showNavbar, setshowNavbar] = useState(false);
  const [address, setAddress] = useState("");

  useEffect(() => {
    let window_width = window.matchMedia("(max-width:901px)");
    window_width.addListener(handleScreenChange);
    handleScreenChange(window_width);
    return () => {
      window_width.removeListener(handleScreenChange);
    };
  }, []);

  useEffect(() => {
    let addr = window.localStorage.getItem("addr");
    if (addr) {
      setAddress(addr);
    }
  }, []);

  const handleScreenChange = (mediaQuery: any) => {
    if (mediaQuery.matches) {
      setshowNavbar(false);
    } else {
      setshowNavbar(true);
    }
  };

  const handleChange = () => {
    setshowNavbar(!showNavbar);
  };
  const handleConnect = async () => {
    const { ethereum } = window;
    let addr = window.localStorage.getItem("addr");
    if (address != "" && addr) {
      window.localStorage.removeItem("addr");
      setAddress("");
    } else {
      if (ethereum) {
        const ChainId = await window.ethereum.request({
          method: "eth_chainId",
        });
        if (ChainId === "0x1") {
          await window.ethereum
            .request({ method: "eth_requestAccounts" })
            .then((accs: any) => {
              if (accs && accs.length) {
                setAddress(accs[0]);
                window.localStorage.setItem("addr", accs[0].toString());
              }
            })
            .catch((e: any) => {
              notification["warning"]({
                message: "Warning",
                description: "metamask connect failed...",
              });
            });
        } else {
          notification["warning"]({
            message: "Warning",
            description: "please correct choose chain...",
          });
        }
      } else {
        notification["warning"]({
          message: "Warning",
          description: "please install the metamask...",
        });
      }
    }
  };
  return (
    <NavbarContainer>
      <div className="mark">
        <SmallLogo />
      </div>
      <NavbarItemGroupDesktop>
        <NavbarItem href="#aboutus">About us</NavbarItem>
        <NavbarItem href="#tokenomics">Tokenomics</NavbarItem>
        <Button
          width={107}
          height={35}
          content={
            address
              ? address.slice(0, 3) + "..." + address.slice(-2)
              : "connect"
          }
          handleClick={handleConnect}
          fSize={14}
        />
      </NavbarItemGroupDesktop>
      {showNavbar ? (
        <NavbarItemGroupMobile>
          <NavbarItem href="#aboutus">About us</NavbarItem>
          <NavbarItem href="#tokenomics">Tokenomics</NavbarItem>
          <Button
            width={107}
            height={35}
            content={
              address
                ? address.slice(0, 3) + "..." + address.slice(-2)
                : "connect"
            }
            fSize={14}
            handleClick={handleConnect}
          />
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
