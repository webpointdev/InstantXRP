import React from "react";
import {
  TokenomicsContainer,
  TokenomicsContent,
  TokenomicsDescription,
  TokenomicsTitle,
  TokenomicsFuncGroup,
  TokenomicsFunc,
} from "./Tokenomics.styled";
import back_img from "../../asserts/background/tokenmics.png";
import Reward from "../../asserts/logo/reward.png";
const Tokenomics = () => {
  return (
    <TokenomicsContainer>
      <img
        src={back_img}
        alt="back_img"
        className="back_img"
        draggable="false"
      />
      <TokenomicsContent id="tokenomics">
        <TokenomicsTitle>Tokenomics</TokenomicsTitle>
        <TokenomicsDescription>
          We are creating products that combine cutting - edge technologies for
          a better now
        </TokenomicsDescription>
        <TokenomicsFuncGroup>
          <TokenomicsFunc>
            <img src={Reward} alt="reward" draggable="false" />
            <b>Reward</b>
            <span>
              12% of every transaction Buy/Sell is redistributed to all holders.
              The longer you hold InstantXRP, the more XRP you earn. Reward will
              be automatically sent to your wallet. In case of lower volume, the
              process may take a while.
            </span>
          </TokenomicsFunc>
          <TokenomicsFunc>
            <img src={Reward} alt="reward" draggable="false" />
            <b>Reward</b>
            <span>
              12% of every transaction Buy/Sell is redistributed to all holders.
              The longer you hold InstantXRP, the more XRP you earn. Reward will
              be automatically sent to your wallet. In case of lower volume, the
              process may take a while.
            </span>
          </TokenomicsFunc>
          <TokenomicsFunc>
            <img src={Reward} alt="reward" draggable="false" />
            <b>Reward</b>
            <span>
              12% of every transaction Buy/Sell is redistributed to all holders.
              The longer you hold InstantXRP, the more XRP you earn. Reward will
              be automatically sent to your wallet. In case of lower volume, the
              process may take a while.
            </span>
          </TokenomicsFunc>
        </TokenomicsFuncGroup>
      </TokenomicsContent>
    </TokenomicsContainer>
  );
};

export default Tokenomics;
