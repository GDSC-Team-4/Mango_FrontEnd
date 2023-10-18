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
      rgba(37, 37, 45, 0.85),
      rgba(37, 37, 45, 0.85)
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
  align-items: center;
  background-color: rgba(245, 235, 255, 0.4);
  width: 30vw;
  max-width: 600px;
  max-height: 650px;
  border-radius: 20px;
  background: rgba(217, 217, 217, 0.2);
  padding: 5%;
  border: none;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  color: #fcfdf2;
  margin-bottom: 50px;
  font-size: 40px;
  font-weight: 600;
  width: 100%;
  span {
  }
`;

const Form = styled.form``;

const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.4);
  box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.1);
  width: 400px;
  height: 70px;
  margin-bottom: 20px;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

const UserLabel = styled(LabelContainer)`
  width: 190px;
  height: 70px;
`;

const Label = styled.label`
  color: rgba(252, 253, 242, 0.8);
  display: flex;
  height: 100%;
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 10px;
`;

const Input = styled.input.attrs({ type: "text" })`
  width: 100%;
  height: 3vh;
  border: none;
  background: transparent;
  font-size: 20px;
  margin-bottom: 15px;
  margin-left: 10px;
  &::placeholder {
    color: #fff;
  }
`;

const Submit = styled.input`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 100px;
  background: rgba(37, 37, 45, 0.7);
  color: #fff;
  font-size: 20px;
  margin-top: 50px;
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
          <span>Create new Account</span>
        </Title>
        <Form>
          <UserContainer>
            <UserLabel>
              <Label>User ID</Label>
              <Input placeholder="User ID" />
            </UserLabel>
            <UserLabel>
              <Label>Nickname</Label>
              <Input placeholder="Nickname" />
            </UserLabel>
          </UserContainer>
          <LabelContainer>
            <Label>Password</Label>
            <Input placeholder="User Password" />
          </LabelContainer>
          <LabelContainer>
            <Label>Check Password</Label>
            <Input placeholder="Check Password" />
          </LabelContainer>
          <LabelContainer>
            <Label>Email</Label>
            <Input placeholder="Email" />
          </LabelContainer>
          <Submit type="submit" value="Create New Account" />
        </Form>
      </Container>
    </Wrapper>
  );
};
