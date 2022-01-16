import React from "react";
import Content from "../layout/Content";
import Footer from "../layout/Footer";
import Navbar from "../layout/Navbar";
import BuySection from "../section/buy/BuySection";
import IntroSection from "../section/Intro/IntroSection";
import Tokenomics from "../section/tokenomics/Tokenomics";
import { LandingPageContainer, FooterOut, ContentOut } from "./Landing.style";
const Landing = () => {
  return (
    <LandingPageContainer>
      <ContentOut>
        <Content>
          <Navbar />
          <IntroSection />
          <BuySection />
          <Tokenomics />
        </Content>
      </ContentOut>
      <FooterOut>
        <Footer />
      </FooterOut>
    </LandingPageContainer>
  );
};

export default Landing;
