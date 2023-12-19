import { useRecoilValue } from "recoil";
import { searchStateTest } from "../../Atom/Search";
import { MainHeader } from "./MainHeader";
import { StoreListSlider } from "./StoreListSlider";
import { StoreStorySlider } from "./StoreStorySlider";
import styled from "styled-components";
import axiosInstance from "../../Api/axios";

const Wrapper = styled.div`
  height: 100%;
  width: 100%
  justify-content: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 50px;
  white-space: pre;
  overflow:hidden;
`;

export const MainPage = () => {
  const searchResults = useRecoilValue(searchStateTest);
  axiosInstance
    .get(`\main`)
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
        <StoreListSlider />
        <StoreStorySlider />
      </Wrapper>

      {/* 배열인지 확인한 후 검색 결과 출력 */}
      {/* {Array.isArray(searchResults) &&
        searchResults.slice(0, 2).map((result) => (
          <div key={result.id}>
            <p>{result.categoryName}</p>
            <p>{result.placeName}</p>
          </div>
        ))} */}
    </>
  );
};
