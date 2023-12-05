import axios from "axios";
import { SERVER } from "../config";

const axiosInstance = axios.create({
  baseURL: `${SERVER.SERVER}`,
  withCredentials: true,
});

//session으로 할거면 안씀
axiosInstance.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 400) {
        alert("잘못된 요청입니다");
      } else if (status === 401) {
        alert("로그인이 필요합니다");
      } else if (status === 403) {
        alert("권한이 없습니다.");
      } else if (status === 404) {
        alert("요청하신 페이지를 찾을 수 없습니다");
      } else if (status === 500) {
        alert("서버에 오류가 발생했습니다. 잠시 후 다시 시도해주세요");
      } else {
        alert("에러가 발생했습니다. 잠시 후 다시 시도해주세요");
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;