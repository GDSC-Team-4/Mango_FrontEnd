import styled from "styled-components";
import img from "../grape_background.png";
import logo from "../logo.png";

const Wrapper = styled.div<{ image: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10%;
  flex-direction: row;
  background-image: linear-gradient(
      rgba(37, 37, 45, 0.9),
      rgba(37, 37, 45, 0.9)
    ),
    url(${(props) => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  gap: 10vw;
`;

const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: rgba(252, 253, 242, 0.7);
    font-size: 50px;
    font-weight: 600;
    letter-spacing: 5px;
    margin-top: -100px;
  }
`;

const Logo = styled.img``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: rgba(245, 235, 255, 0.4);
  width: 30vw;
  max-width: 320px;
  border-radius: 15px;
  padding: 5%;
  border: none;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const Title = styled.div`
  display: flex;
  color: #3b3486;
  margin-bottom: 10%;
  font-size: 30px;
  font-weight: 700;
  width: 100%;
  span {
    text-align: left;
  }
`;

const Label = styled.label`
  color: #3b3486;
  display: flex;
  height: 100%;
  font-size: 15px;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Input = styled.input`
  border: 1px solid #d3d3d3;
  border-radius: 5px;
  width: 100%;
  height: 3vh;
  margin-bottom: 10%;
`;

const Submit = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 5vh;
  border: 3px solid #3b3486;
  border-radius: 5px;
  background-color: #fff;
  color: #3b3486;
  font-size: 15px;
  font-weight: 600;
`;

export const RegisterPage = () => {
  return (
    <Wrapper image={img}>
      <LogoContainer>
        <Logo src={logo} />
        <span>포도 플레이트</span>
      </LogoContainer>
      <Container>
        <Title>
          <span>회원가입</span>
        </Title>
        <form>
          <Label>아이디</Label>
          <Input />
          <Label>비밀번호</Label>
          <Input />
          <Label>닉네임</Label>
          <Input />
          <Label>이메일</Label>
          <Input />
          <Submit type="submit" value="가입하기" />
        </form>
      </Container>
    </Wrapper>
  );
};
