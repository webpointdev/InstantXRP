import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormContainer, BlanceBlock, BuyBlock } from "./Form.styled";
import Button from "./Button";
import Input from "./Input";

const Form = () => {
  //@ts-ignore
  const buyEth = useSelector((state) => state.home.buyEth);
  return (
    <FormContainer>
      <BlanceBlock>
        InstantXrp balance<div>{buyEth} eth</div>
      </BlanceBlock>
      <BuyBlock>
        <span>buy instantxrp v2</span>
        <Input />
        <Button width={139} height={45} content="buy now" fSize={17} />
      </BuyBlock>
    </FormContainer>
  );
};

export default Form;
