import styled from "styled-components";
import { Link } from "react-scroll";

export const Nav = styled.div`
  background: #000;
  height: 80px;
  //   margin-top: -80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavH1 = styled.div`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
  font-family: "Encode Sans Expanded", sans-serif;
  font-size: 40px;
`;

export const HeroBtnWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Button = styled(Link)`
    border-radius:50px;
    background:${({ primary }) => (primary ? "#01BF71" : "#010606")}};
    white-space:nowrap;
    padding: ${({ Big }) => (Big ? "14px 48px" : "12px 30px")};
    color: ${({ dark }) => (dark ? "#010606" : "#fff")};
    font-size: ${({ FontBig }) => (FontBig ? "20px" : "16px")};
    outline:none;
    border:none;
    margin-top: -19px;
    cursor:pointer;
    transition:all 0.2s ease-in-out;
    display:flex;
    align-items:center;
    justify-content:center;
    font-family: "Encode Sans Expanded", sans-serif;
    font-weight: bold;

    &:hover {
        trasition :all 0.2s ease-in-out;
        background:${({ primary }) => (primary ? "#fff" : "#01BF71")};
    }

`;
