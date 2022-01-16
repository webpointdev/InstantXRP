import React, { useState } from "react";
import styled from "styled-components";
export const InputContainer = styled.div`
  max-width: 800px;
  position: relative;
  ::before {
    content: "instandxrp v2";
    font-size: 28px;
    color: #fcba04 !important;
    left: 210px;
    top: 15px;
    z-index: 999;
    position: absolute;
  }
`;
export const InputContent = styled.input`
  background-color: #0f2838;
  border-radius: 5px;
  font-size: 28px;
  color: #fff;
  height: 73px;
  padding: 0 70px 0 10px;
  border: none;
  transition: all 0.85s;
  ::placeholder {
    color: #273547;
    font-size: 19px;
  }
  @media screen and (max-width: 430px) {
    width: 220px !important;
  }
`;

const Input = () => {
  const [init, setInit] = useState("");
  return (
    <InputContainer>
      <InputContent
        placeholder="Add amount"
        value={init}
        onChange={(e: any) => setInit(e.target.value)}
      />
      {/* <Span>instand xrp</Span> */}
    </InputContainer>
  );
};

export default Input;
