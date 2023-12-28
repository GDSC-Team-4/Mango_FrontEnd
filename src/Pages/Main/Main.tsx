import styled from "styled-components";
import { MainHeader } from "./MainHeader";
import { StoreListSlider } from "./Slider/StoreListSlider";
import { StoreStorySlider } from "./Slider/StoreStorySlider";
import { StoreEditorSlider } from "./Slider/StoreEditorSlider";
import axiosInstance from "../../Api/axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  EditorDataState,
  ListDataState,
  StoryDataState,
} from "../../Atom/Main";

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
  const [listData, setListData] = useRecoilState(ListDataState);
  const setStoryData = useSetRecoilState(StoryDataState);
  const setEditorData = useSetRecoilState(EditorDataState);

  if (listData.length === 0) {
    axiosInstance
      .get(`\main`)
      .then((response) => {
        setListData(response.data[0].data);
        setStoryData(response.data[1].data);
        setEditorData(response.data[2].data);
        //console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <MainHeader />
      <Wrapper>
        <StoreListSlider />
        <StoreStorySlider />
        <StoreEditorSlider />
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
