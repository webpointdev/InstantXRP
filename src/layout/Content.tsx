import React from "react";
import styled from "styled-components";
export const ContentContainer = styled.div`
  margin-bottom: 150px !important;
  @media screen and (min-width: 1440px) {
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 50px;
  }
  @media screen and (max-width: 1439px) {
    margin: 0 136px !important;
  }
  @media screen and (max-width: 680px) {
    margin: 0 20px !important;
  }
`;
const Content: React.FC<{}> = (props) => {
  return <ContentContainer>{props.children}</ContentContainer>;
};

export default Content;
