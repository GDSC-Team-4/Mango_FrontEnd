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
  ErrorMessage,
} from "../RegisterPage/StyledRegister";
import img from "../../../img/grape_background.png";
import logo from "../../../img/logo.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { LoginState } from "../../../Atom/Login";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const LoginContainer = styled(LabelContainer)`
  margin-bottom: 30px;
`;

const HomeBtn = styled(Submit)``;

const RegisterBtn = styled(Submit)`
  background: rgba(245, 235, 255, 0.3);
  margin-top: 10px;
`;

interface ILogin {
  username: string;
  password: string;
}

export const LoginPage = () => {
  const navigate = useNavigate();
  const goRegisterPage = () => {
    navigate("/RegisterPage");
  };
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(LoginState);
  const formData = useRef<ILogin>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>();
  const onValid = (data: ILogin) => {
    formData.current = {
      username: data.username,
      password: data.password,
    };
    axios
      .post("http://localhost:8080/api/auth/signin", formData.current)
      .then((response) => {
        //console.log(response);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("username", response.data.username);
        setIsLoggedIn(true);
        alert("환영합니다!");
        navigate("/");
      })
      .catch(({ response }) => {
        //console.log(response.data.error);
        alert("아이디와 비밀번호를 확인해주세요.");
      });
  };
  return (
    <>
      <Wrapper image={img}>
        <LogoContainer>
          <Logo src={logo} />
          <span>포도 플레이트</span>
        </LogoContainer>
        <Container>
          <Title>Sign in</Title>
          <Form onSubmit={handleSubmit(onValid)}>
            <LoginContainer>
              <Label>User ID</Label>
              <Input
                {...register("username", { required: "User ID를 입력하세요." })}
                placeholder="User ID"
              />
              <ErrorMessage>{errors?.username?.message}</ErrorMessage>
            </LoginContainer>
            <LoginContainer>
              <Label>Password</Label>
              <PasswordInput
                {...register("password", {
                  required: "Password를 입력하세요.",
                })}
                placeholder="Password"
              />
              <ErrorMessage>{errors?.password?.message}</ErrorMessage>
            </LoginContainer>
            <HomeBtn type="submit" value="G0 TO GRAPE PLATE" />
            <RegisterBtn
              onClick={goRegisterPage}
              type="submit"
              value="Create New Account"
            />
          </Form>
        </Container>
      </Wrapper>
    </>
  );
};
