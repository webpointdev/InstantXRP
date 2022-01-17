import React from "react";
import styled from "styled-components";
import { ButtonContainer } from "./Button.styled";
type Props = {
  width?: number;
  height?: number;
  content?: string;
  fSize?: number;
  handleClick?: object;
};
const Button: React.FC<Props> = (props: any) => {
  const { handleClick } = props;
  return (
    <ButtonContainer
      width={props.width}
      height={props.height}
      fSize={props.fSize}
      onClick={handleClick}
    >
      {props.content}
    </ButtonContainer>
  );
};

export default Button;
