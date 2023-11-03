export interface IForm {
  username: string;
  password: string;
  checkpassword: string;
  email: string;
}

// post를 보낼 때 role도 포함되어 있어서 새로운 interface 사용
export interface ISubmit {
  username: string;
  email: string;
  password: string;
  role: string[];
}
