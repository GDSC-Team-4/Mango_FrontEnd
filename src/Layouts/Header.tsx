import React from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import HeaderProps from "../Interface/Header";

const HeaderContainer = styled.header<HeaderProps>`
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

const LogoPosition = styled.div`
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
  @media (min-height: 1024px) {
    font-size: 2.5rem;
    top: 2rem;
    left: 3rem;
  }
`;

const TextPosition = styled.div`
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

const TextPosition1 = styled.div`
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

const ClickIcon = styled(BsPersonCircle)`
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

export const Header = () => {
  const navigation = useNavigate();
  const location = useLocation();
  let color;
  let backgroundColor;
  let border;
  let boxShadow;

  const onRegister = () => {
    navigation("/LoginPage");
  }; // 나중에 로그인 여부 확인해서 mypage로 보내줄 지 회원가입 , 로그인 페이지로 보내줄 지 판단하는 코드 넣을 것임

  const onMain = () => {
    navigation("/");
  };

  if (
    location.pathname === "/RegisterPage" ||
    location.pathname === "/LoginPage"
  ) {
    return null;
  }

  switch (location.pathname) {
    case "/SearchPage":
      color = "#3B3486";
      backgroundColor = "rgba(245,235,255,0.4)";
      border = "2px solid rgba(59, 52, 134, 0.7)";
      boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.25)";
      break;
    case "/SearchDetailPage":
      color = "#FCFDF2";
      border = "2px solid rgba(252, 253, 242, 0.7)";
      boxShadow = "0px 2px 5px rgba(0, 0, 0, 0.25)";
      break;
    default:
      color = "#FCFDF2";
      backgroundColor = "rgba(37,37,45,0.4)";
  }

  return (
    <>
      <HeaderContainer
        backgroundColor={backgroundColor}
        border={border}
        boxShadow={boxShadow}
      >
        <LogoPosition onClick={onMain} color={color}>
          GRAPE
          <br />
          &nbsp;PLATE
        </LogoPosition>
        <TextPosition color={color}>Hot list</TextPosition>
        <TextPosition1 color={color}>Story</TextPosition1>
        <ClickIcon color={color} onClick={onRegister} />
      </HeaderContainer>
    </>
  );
};
