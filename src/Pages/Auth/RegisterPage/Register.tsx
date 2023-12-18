import { useForm } from "react-hook-form";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IForm, ISubmit } from "../../../Interface/Register";
import constant from "../ConstantAuth";
import img from "../../../img/grape_background.png";
import logo from "../../../img/logo.png";
import axios from "axios";
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

      axios
        .post("http://34.64.77.143:8080/api/auth/signup", formData.current)
        .then((response) => {
          alert(constant.SUCCESS.Register);
          navigate("/");
        })
        .catch(({ response }) => {
          alert(response.data.message);
        });
    }
  };

  return (
    <Wrapper image={img}>
      <LogoContainer>
        <Logo src={logo} />
        <span>포도 플레이트</span>
      </LogoContainer>
      <Container>
        <Title>
          <span>Create New Account</span>
        </Title>
        <Form onSubmit={handleSubmit(onValid)}>
          <LabelContainer>
            <Label>User ID</Label>
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
              placeholder="User ID"
            />
            <ErrorMessage>{errors?.username?.message}</ErrorMessage>
          </LabelContainer>
          <LabelContainer>
            <Label>Password</Label>
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
              placeholder="User Password"
            />
            <ErrorMessage>{errors?.password?.message}</ErrorMessage>
          </LabelContainer>
          <LabelContainer>
            <Label>Check Password</Label>
            <PasswordInput
              {...register("checkpassword")}
              placeholder="Check Password"
              type="password"
            />
            <ErrorMessage>{errors?.checkpassword?.message}</ErrorMessage>
          </LabelContainer>
          <LabelContainer>
            <Label>Email</Label>
            <Input
              {...register("email", {
                required: constant.EMAIL.REQUIRED_MESSAGE,
                pattern: {
                  value: constant.EMAIL.PATTERN,
                  message: constant.EMAIL.CHECK_MESSAGE,
                },
              })}
              placeholder="Email"
            />
            <ErrorMessage>{errors?.email?.message}</ErrorMessage>
          </LabelContainer>
          <Submit type="submit" value="Create New Account" />
        </Form>
      </Container>
    </Wrapper>
  );
};
