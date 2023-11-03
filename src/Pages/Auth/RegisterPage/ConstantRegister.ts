const USERNAME = {
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
  REQUIRED_MESSAGE: "User ID를 작성해주세요.",
  LENGTH_MESSAGE: "3 ~ 20 사이의 글자로 작성해주세요.",
};

const PASSWORD = {
  MIN_LENGTH: 6,
  MAX_LENGTH: 40,
  REQUIRED_MESSAGE: "Password를 작성해주세요.",
  LENGTH_MESSAGE: "6 ~ 40 사이의 글자로 작성해주세요.",
  CHECK_MESSAGE: "비밀번호가 일치하지 않습니다.",
};

const EMAIL = {
  REQUIRED_MESSAGE: "이메일을 입력해주세요.",
  PATTERN: /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  CHECK_MESSAGE: "이메일 형식으로 입력해주세요.",
};

const SUCCESS = "회원가입이 완료되었습니다.";

export default { USERNAME, PASSWORD, EMAIL, SUCCESS };
