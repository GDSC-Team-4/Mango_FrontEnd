import {
  Wrapper,
  LogoContainer,
  Logo,
  Container,
  Title,
  Form,
  LabelContainer,
  Label,
  Input,
  PasswordInput,
  Submit,
} from "../RegisterPage/StyledRegister";
import img from "../../../img/grape_background.png";
import logo from "../../../img/logo.png";
import styled from "styled-components";

const LoginContainer = styled(LabelContainer)`
  margin-bottom: 30px;
`;

const HomeBtn = styled(Submit)``;

const RegisterBtn = styled(Submit)`
  background: rgba(245, 235, 255, 0.3);
  margin-top: 10px;
`;

export const LoginPage = () => {
  return (
    <>
      <Wrapper image={img}>
        <LogoContainer>
          <Logo src={logo} />
          <span>포도 플레이트</span>
        </LogoContainer>
        <Container>
          <Title>Sign in</Title>
          <Form>
            <LoginContainer>
              <Label>User ID</Label>
              <Input placeholder="User ID" />
            </LoginContainer>
            <LoginContainer>
              <Label>Password</Label>
              <PasswordInput placeholder="Password" />
            </LoginContainer>
            <HomeBtn type="submit" value="G0 TO GRAPE PLATE" />
            <RegisterBtn type="submit" value="Create New Account" />
          </Form>
        </Container>
      </Wrapper>
    </>
  );
};
