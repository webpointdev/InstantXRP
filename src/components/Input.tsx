import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BUYETH } from "../constants/ActionTypes";
import { InputContainer, InputContent, Span } from "./Input.styled";
type Props = {
  onChange: Function;
};

const Input = (props: any) => {
  const [init, setInit] = useState("");
  const dispatch = useDispatch();
  const handlechange = (e: any) => {
    console.log(e.split("."));
    if (e.split(".").length == 1) {
      setInit(e);
      dispatch({ type: BUYETH, payload: e });
    } else {
      if (e.split(".")[1].length < 6) {
        setInit(e);
        dispatch({ type: BUYETH, payload: e });
      }
    }
  };
  return (
    <InputContainer>
      <InputContent
        type="number"
        placeholder="Add amount"
        value={init}
        onChange={(e: any) => handlechange(e.target.value)}
      />
      <Span>instandxrp v2</Span>
    </InputContainer>
  );
};

export default Input;
