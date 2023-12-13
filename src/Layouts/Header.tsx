import { useNavigate, useLocation } from "react-router-dom";
import { HeaderContainer,LogoPosition, 
        TextPosition, TextPosition1, ClickIcon } from "./HeaderStyle";

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
