import { BsPersonCircle } from "react-icons/bs";
import HeaderProps from "../Interface/Header";
import styled from "styled-components";

export const HeaderContainer = styled.header<HeaderProps>`
  width: 100%;
  height: 12vh;
  background-color: ${(props) => props.backgroundColor};
  border-bottom: ${(props) => props.border || "none"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
`;

export const LogoPosition = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 1.8rem;
  line-height: 2.2rem;
  color: ${(props) => props.color};
  position: fixed;
  top: 1rem;
  left: 2rem;
  width: 15vh;
  height: 8vh;
  cursor: pointer;
  @media (min-width: 768px) {
    font-size: 2rem;
    top: 1.5rem;
    left: 2.5rem;
  }

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    top: 2rem;
    left: 3rem;
  }
`;

export const TextPosition = styled.div`
  width: 5vw;
  height: 2vw;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vw;
  line-height: 1.4vw;
  display: flex;
  justify-content: center;
  color: ${(props) => props.color};
  cursor: pointer;
  margin-left: 75vw;
`;

export const TextPosition1 = styled.div`
  width: 5vw;
  height: 2vw;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vw;
  line-height: 1.4vw;
  display: flex;
  justify-content: center;
  color: ${(props) => props.color};
  cursor: pointer;
  margin-left: 3vw;
`;

export const ClickIcon = styled(BsPersonCircle)`
  color: ${(props) => props.color};
  width: 5vw;
  height: 2vw;
  display: flex;
  justify-content: center;
  margin-right: -1vw;
  margin-bottom: 0.3vw;
  cursor: pointer;
  margin-left: 3vw;
`;

export const SignOut = styled.div`
  width: 5vw;
  height: 2vw;
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 1.2vw;
  line-height: 1.4vw;
  display: flex;
  justify-content: center;
  color: ${(props) => props.color};
  cursor: pointer;
  margin-left: 3vw;
`;