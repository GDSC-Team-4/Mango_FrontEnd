import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(245, 235, 255, 0.4);
  padding: 10%;
`;

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
    <Wrapper>
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
