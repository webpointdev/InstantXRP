import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BUYETH } from "../constants/ActionTypes";
type Props = {
  onChange: Function;
};
export const InputContainer = styled.div`
  max-width: 800px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-content: center;
  justify-content: space-between;
  background-color: #0f2838;
  margin-bottom: 20px;
  border-radius: 10px;
  @media screen and (max-width: 560px) {
    width: 100%;
  }
`;
export const InputContent = styled.input`
  background-color: transparent;
  border-radius: 5px;
  font-size: 28px;
  color: #fff;
  margin-bottom: 0;
  height: 80px;
  box-sizing: border-box;
  /* padding: 0 10px 0 10px; */
  border: none;
  transition: all 0.85s;
  ::placeholder {
    color: #273547;
    font-size: 19px;
  }
  :focus {
    border-color: transparent;
  }
  @media screen and (max-width: 860px) {
    padding: 0;
    font-size: 20px !important;
  }
  @media screen and (max-width: 540px) {
    width: 220px !important;
  }
  @media screen and (max-width: 430px) {
    font-size: 18px !important;
    margin-top: 5px;
  }
`;
export const Span = styled.span`
  font-size: 28px;
  color: #fcba04 !important;
  margin-right: 5px;
  @media screen and (max-width: 860px) {
    font-size: 20px;
  }
  @media screen and (max-width: 400px) {
    font-size: 18px;
  }
`;
const Input = (props: any) => {
  const [init, setInit] = useState("");
  const dispatch = useDispatch();
  const handlechange = (e: any) => {
    if (e.length < 7) {
      setInit(e);
      dispatch({ type: BUYETH, payload: e });
    }
  };
  return (
    <InputContainer>
      <InputContent
        type="number"
        placeholder="Add amount"
        value={init}
        maxlength="10"
        onChange={(e: any) => handlechange(e.target.value)}
      />
      <Span>instandxrp v2</Span>
    </InputContainer>
  );
};

export default Input;
