import styled from "styled-components";
import { useForm } from "react-hook-form";
import img from "../../../img/grape_background.png";
import logo from "../../../img/logo.png";

export const Wrapper = styled.div<{ image: string }>`
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

export const LogoContainer = styled.div`
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

export const Logo = styled.img``;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(245, 235, 255, 0.4);
  width: 30vw;
  max-width: 600px;
  max-height: 650px;
  border-radius: 20px;
  background: rgba(217, 217, 217, 0.1);
  padding: 6% 2%;
  border: none;
`;

export const Title = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: center;
  color: #fcfdf2;
  font-size: 40px;
  font-weight: 600;
  width: 100%;
  span {
  }
`;

export const Form = styled.form``;

export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background: rgba(217, 217, 217, 0.4);
  box-shadow: 0px 4px 10px 0px rgba(255, 255, 255, 0.1);
  width: 400px;
  height: 70px;
  margin-bottom: 20px;
`;

export const Label = styled.label`
  color: rgba(252, 253, 242, 0.8);
  display: flex;
  height: 100%;
  font-size: 12px;
  font-weight: 600;
  margin-top: 10px;
  margin-left: 10px;
`;

export const Input = styled.input.attrs({ type: "text" })`
  width: 80%;
  height: 3vh;
  border: none;
  background: transparent;
  font-size: 20px;
  color: #fff;
  margin-bottom: 15px;
  margin-left: 10px;
  &::placeholder {
    color: #fff;
  }
`;

export const PasswordInput = styled(Input).attrs({ type: "password" })``;

export const Submit = styled.input`
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

export const ErrorMessage = styled.span`
  color: #fff;
  font-size: 12px;
  margin-top: 5px;
`;

interface IForm {
  username: string;
  password: string;
  checkpassword: string;
  email: string;
}

export const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<IForm>();

  const onValid = (data: IForm) => {
    if (data.password !== data.checkpassword) {
      setError(
        "checkpassword",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    }
    console.log(data);
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
