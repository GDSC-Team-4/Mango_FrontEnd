import { useForm } from "react-hook-form";
import img from "../../../img/grape_background.png";
import logo from "../../../img/logo.png";
import { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { IForm, ISubmit } from "../../../Interface/Register";
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
        { message: "비밀번호가 일치하지 않습니다." },
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
        .post("http://localhost:8080/api/auth/signup", formData.current)
        .then((response) => {
          alert("회원가입이 완료되었습니다.");
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
          <span>Create new Account</span>
        </Title>
        <Form onSubmit={handleSubmit(onValid)}>
          <LabelContainer>
            <Label>User ID</Label>
            <Input
              {...register("username", {
                required: "User ID를 작성해주세요.",
                minLength: {
                  value: 3,
                  message: "3 ~ 20 사이의 글자로 작성해주세요.",
                },
                maxLength: {
                  value: 20,
                  message: "3 ~ 20 사이의 글자로 작성해주세요.",
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
                required: "Password를 작성해주세요.",
                minLength: {
                  value: 6,
                  message: "6 ~ 40 사이의 글자로 작성해주세요.",
                },
                maxLength: {
                  value: 40,
                  message: "6 ~ 40 사이의 글자로 작성해주세요.",
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
                required: "이메일을 입력해주세요.",
                pattern: {
                  value: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: "이메일 형식으로 입력해주세요.",
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
