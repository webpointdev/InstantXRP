import styled from "styled-components";
export const NavbarContainer = styled.div`
  margin: 30px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.85s;
  @media screen and (max-width: 530px) {
    justify-content: center;
  }
  .logo {
    color: white;
    font-size: 30px;
    @media screen and (max-width: 530px) {
      position: absolute;
      right: 10px;
      top: 10px;
    }
  }
  .close_logo {
    color: white;
    font-size: 30px;
    position: absolute;
    right: 5px;
    top: 5px;
  }
  .mark {
    cursor: pointer;
    :hover {
      transition: all 0.85s ease-in-out;
      transform: scale(1.1);
    }
  }
`;
export const NavbarItemGroupDesktop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  * {
    margin: 0 20px;
  }

  @media screen and (max-width: 900px) {
    display: none;
  } ;
`;
export const NavbarItemGroupMobile = styled.div`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    right: 0;
    top: 0;
    background-color: rgba(0, 0, 0, 0.7);
    height: 1000px;
    z-index: 9999999;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 30px 50px;
    * {
      margin: 10px 0;
    }
  } ;
`;
export const FooterContainer = styled.div`
  left: 0;
  height: 107px;
  width: 1400px;
  z-index: 999;
  transition: all 0.85s;
  @media screen and (max-width: 800px) {
    height: 250px;
  }
`;
export const SectionContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  margin: auto;
  padding: 25px;
  @media screen and (max-width: 800px) {
    flex-direction: column;
    * {
      margin-bottom: 20px;
    }
  }
`;
export const FooterTitle = styled.div`
  font-size: 14px;
  color: white;
  @media screen and (max-width: 360px) {
    text-align: center;
  } ;
`;
export const ItemGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  grid-gap: 20px;
`;
export const NavbarItem = styled.a`
  text-transform: uppercase;
  font-size: 16px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  :hover {
    border-bottom: 1px solid #fcba04;
    transition: all 0.85s ease-out;
  }
`;
