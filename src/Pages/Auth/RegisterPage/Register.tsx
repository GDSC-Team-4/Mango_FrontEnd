import {
  Container,
  ErrorMessage,
  Form,
  Input,
  Label,
  LabelContainer,
  Logo,
  LogoContainer,
  PasswordInput,
  Submit,
  Title,
  Wrapper,
} from "./StyledRegister";
import img from "../../../img/grape_background.png";
import logo from "../../../img/logo.png";
import constant from "../ConstantAuth";

import { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { IForm, ISubmit } from "../../../Interface/Register";

import axiosInstance from "../../../Api/axios";

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();
  const formData = useRef<ISubmit>();
  const navigate = useNavigate();

  const onValid = (data: IForm) => {
    if (data.password !== data.checkpassword) {
      setError(
        "checkpassword",
        { message: constant.PASSWORD.CHECK_MESSAGE },
        { shouldFocus: true }
      );
    } else {
      formData.current = {
        username: data.username,
        email: data.email,
        password: data.password,
        role: ["user"],
      };

      axiosInstance
        .post(`/api/auth/signup`, formData.current)
        .then((response) => {
          alert(constant.SUCCESS.REGISTER);
          navigate("/");
        })
        .catch(({ response }) => {
          alert(response.data.message);
        });
    }
  };
  const onClick = () => {
    navigate("/");
  };

  return (
    <Wrapper image={img}>
      <LogoContainer>
        <Logo src={logo} onClick={onClick} />
        <span>{constant.TEXT.TITLE}</span>
      </LogoContainer>
      <Container>
        <Title>
          <span>{constant.TEXT.REGISTER_BTN}</span>
        </Title>
        <Form onSubmit={handleSubmit(onValid)}>
          <LabelContainer>
            <Label>{constant.TEXT.USER_ID}</Label>
            <Input
              {...register("username", {
                required: constant.USERNAME.REQUIRED_MESSAGE,
                minLength: {
                  value: constant.USERNAME.MIN_LENGTH,
                  message: constant.USERNAME.LENGTH_MESSAGE,
                },
                maxLength: {
                  value: constant.USERNAME.MAX_LENGTH,
                  message: constant.USERNAME.LENGTH_MESSAGE,
                },
              })}
              placeholder={constant.TEXT.USER_ID}
            />
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
          </LabelContainer>
          <LabelContainer>
            <Label>{constant.TEXT.PASSWORD}</Label>
            <PasswordInput
              {...register("password", {
                required: constant.PASSWORD.REQUIRED_MESSAGE,
                minLength: {
                  value: constant.PASSWORD.MIN_LENGTH,
                  message: constant.PASSWORD.LENGTH_MESSAGE,
                },
                maxLength: {
                  value: constant.PASSWORD.MAX_LENGTH,
                  message: constant.PASSWORD.LENGTH_MESSAGE,
                },
              })}
              type="password"
              placeholder={constant.TEXT.USER_PASSWORD}
            />
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          </LabelContainer>
          <LabelContainer>
            <Label>{constant.TEXT.CHECK_PASSWORD}</Label>
            <PasswordInput
              {...register("checkpassword")}
              placeholder={constant.TEXT.CHECK_PASSWORD}
              type="password"
            />
            <ErrorMessage>{errors?.checkpassword?.message}</ErrorMessage>
          </LabelContainer>
          <LabelContainer>
            <Label>{constant.TEXT.EMAIL}</Label>
            <Input
              {...register("email", {
                required: constant.EMAIL.REQUIRED_MESSAGE,
                pattern: {
                  value: constant.EMAIL.PATTERN,
                  message: constant.EMAIL.CHECK_MESSAGE,
                },
              })}
              placeholder={constant.TEXT.EMAIL}
            />
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          </LabelContainer>
          <Submit type="submit" value={constant.TEXT.REGISTER_BTN} />
        </Form>
      </Container>
    </Wrapper>
  );
};
