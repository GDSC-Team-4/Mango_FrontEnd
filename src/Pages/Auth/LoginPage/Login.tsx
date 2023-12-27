import {
  Wrapper,
  LogoContainer,
  Logo,
  Container,
  Title,
  Form,
  Label,
  Input,
  PasswordInput,
  ErrorMessage,
} from "../RegisterPage/StyledRegister";
import { HomeBtn, LoginContainer, RegisterBtn } from "./StyledLogin";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { LoginState } from "../../../Atom/Login";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { ILogin } from "../../../Interface/Login";
import axiosInstance from "../../../Api/axios";
import constant from "../ConstantAuth";
import img from "../../../img/grape_background.png";
import logo from "../../../img/logo.png";

export const LoginPage = () => {
  const navigate = useNavigate();
  const goRegisterPage = () => {
    navigate("/RegisterPage");
  };
  const setIsLoggedIn = useSetRecoilState(LoginState);
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
    axiosInstance
      .post(`api/auth/signin`, formData.current)
      .then((response) => {
        //console.log(response);
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("username", response.data.username);
        setIsLoggedIn(true);
        alert(constant.SUCCESS.Login);
        navigate(-1);
      })
      .catch(({ response }) => {
        //console.log(response.data.error);
        alert(constant.FAIL.Login);
      });
  };
  const onClick = () => {
    navigate("/");
  };
  return (
    <>
      <Wrapper image={img}>
        <LogoContainer>
          <Logo src={logo} onClick={onClick} />
          <span>포도 플레이트</span>
        </LogoContainer>
        <Container>
          <Title>Sign in</Title>
          <Form onSubmit={handleSubmit(onValid)}>
            <LoginContainer>
              <Label>User ID</Label>
              <Input
                {...register("username", {
                  required: constant.USERNAME.REQUIRED_MESSAGE,
                })}
                placeholder="User ID"
              />
              <ErrorMessage>{errors?.username?.message}</ErrorMessage>
            </LoginContainer>
            <LoginContainer>
              <Label>Password</Label>
              <PasswordInput
                {...register("password", {
                  required: constant.PASSWORD.REQUIRED_MESSAGE,
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
