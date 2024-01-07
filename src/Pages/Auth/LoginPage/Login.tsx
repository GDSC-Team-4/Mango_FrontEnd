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
import img from "../../../img/grape_background.png";
import logo from "../../../img/logo.png";
import constant from "../ConstantAuth";

import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useRef } from "react";

import { useSetRecoilState } from "recoil";
import { LoginState } from "../../../Atom/Login";
import axiosInstance from "../../../Api/axios";

import { ILogin } from "../../../Interface/Login";

export const LoginPage = () => {
  const navigate = useNavigate();
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
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("username", response.data.username);
        setIsLoggedIn(true);
        alert(constant.SUCCESS.LOGIN);
        navigate(-1);
      })
      .catch(({ response }) => {
        console.log(response.data.error);
        alert(constant.FAIL.LOGIN);
      });
  };

  const goRegisterPage = () => {
    navigate("/RegisterPage");
  };
  const onClick = () => {
    navigate("/");
  };
  return (
    <>
      <Wrapper image={img}>
        <LogoContainer>
          <Logo src={logo} onClick={onClick} />
          <span>{constant.TEXT.TITLE}</span>
        </LogoContainer>
        <Container>
          <Title>{constant.TEXT.SIGN_IN}</Title>
          <Form onSubmit={handleSubmit(onValid)}>
            <LoginContainer>
              <Label>{constant.TEXT.USER_ID}</Label>
              <Input
                {...register("username", {
                  required: constant.USERNAME.REQUIRED_MESSAGE,
                })}
                placeholder={constant.TEXT.USER_ID}
              />
              <ErrorMessage>{errors?.username?.message}</ErrorMessage>
            </LoginContainer>
            <LoginContainer>
              <Label>{constant.TEXT.PASSWORD}</Label>
              <PasswordInput
                {...register("password", {
                  required: constant.PASSWORD.REQUIRED_MESSAGE,
                })}
                placeholder={constant.TEXT.PASSWORD}
              />
              <ErrorMessage>{errors?.password?.message}</ErrorMessage>
            </LoginContainer>
            <HomeBtn type="submit" value={constant.TEXT.LOGIN_BTN} />
            <RegisterBtn
              onClick={goRegisterPage}
              type="submit"
              value={constant.TEXT.REGISTER_BTN}
            />
          </Form>
        </Container>
      </Wrapper>
    </>
  );
};
