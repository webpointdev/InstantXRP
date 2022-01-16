import React from "react";
import styled from "styled-components";
type Props = {
  width: number;
  height: number;
  content: string;
  fSize: number;
};
export const ButtonContainer = styled.div<Props>`
  width: ${(props: any) => props.width}px;
  height: ${(props: any) => props.height}px;
  background-color: #fcba04;
  color: #000;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  border-radius: 5px;
  font-size: ${(props: any) => props.fSize}px !important;
  border: none;
  outline: none;
  position: relative;
  z-index: 0;
  cursor: pointer;
  :before {
    content: "";
    background: linear-gradient(
      45deg,
      #ff0000,
      #ff7300,
      #fffb00,
      #48ff00,
      #00ffd5,
      #002bff,
      #7a00ff,
      #ff00c8,
      #ff0000
    );
    position: absolute;
    top: -2px;
    left: -2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 10s linear infinite;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
    border-radius: 10px;
  }
  :active {
    color: #fff;
  }
  :active:after {
    background: transparent;
  }
  :hover:before {
    opacity: 1;
  }
  :after {
    z-index: -1;
    content: "";
    position: absolute;
    width: 100%;
    background-color: #fcba04;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 5px;
  }
  @keyframes glowing {
    0% {
      background-position: 0 0;
    }
    50% {
      background-position: 400% 0;
    }
    100% {
      background-position: 0 0;
    }
  }
`;

const Button: React.FC<Props> = (props: any) => {
  return (
    <ButtonContainer
      width={props.width}
      height={props.height}
      fSize={props.fSize}
    >
      {props.content}
    </ButtonContainer>
  );
};

export default Button;
