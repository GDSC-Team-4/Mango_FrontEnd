import { useRecoilValue } from "recoil";
import { searchStateTest } from "../../Atom/Search";
import { MainHeader } from "./MainHeader";
import { SimpleSlider } from "./Slider";
import axios from "axios";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 95vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  gap: 50px;
  white-space: pre;
`;

export const MainPage = () => {
  const searchResults = useRecoilValue(searchStateTest);
  axios
    .get("http://34.64.77.143:8080/main")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <>
      <MainHeader />
      <Wrapper>
        <SimpleSlider />
      </Wrapper>

      {/* 배열인지 확인한 후 검색 결과 출력 */}
      {Array.isArray(searchResults) &&
        searchResults.slice(0, 2).map((result) => (
          <div key={result.id}>
            <p>{result.categoryName}</p>
            <p>{result.placeName}</p>
          </div>
        ))}
    </>
  );
};
