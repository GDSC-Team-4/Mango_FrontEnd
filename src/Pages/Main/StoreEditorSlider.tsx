import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { randomImg } from "./MainImg";
import {
  ColumnBox,
  RactTitle,
  RandomRactangle,
  SubRactangle,
} from "../Search/SearchStyle";
import { StorySlider } from "./StoreStorySlider";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { EditorDataState } from "../../Atom/Main";
import { useEffect, useState } from "react";
import { isValidImage } from "./StoreListSlider";
import { selectedRestaurantState } from "../../Atom/Search";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const Title = styled.span`
  margin-top: 10vh;
  font-size: 25px;
  font-weight: 600;
`;

const StoreTitle = styled(RactTitle)`
  display: flex;
  justify-content: center;
`;

const EditorBox = styled(RandomRactangle)`
  display: flex;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  position: relative;
  border-radius: 20px;
  background-size: cover;
`;

const SubEditorBox = styled(SubRactangle)`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: ${(props) => props.height}px;
  text-align: center;
  justify-content: center;
`;

export const EditorSlider = styled(StorySlider)``;

export const StoreEditorSlider = () => {
  const editorData = useRecoilValue(EditorDataState);
  const setSelectedRestaurant = useSetRecoilState(selectedRestaurantState);
  const navigation = useNavigate();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    // 이미지 URL 유효성 검사를 비동기로 처리
    Promise.all(
      editorData.map(async (item, index) => {
        const isValid = await isValidImage(item.imageUrl);
        return isValid ? item.imageUrl : randomImg[index].imageurl;
      })
    ).then((urls) => {
      setImageUrls(urls); // 검사된 URL들을 상태에 저장
    });
  }, [editorData]);
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <>
      <Container>
        <Title>에디터가 선정한 역곡 식당</Title>
      </Container>
      <ColumnBox>
        <EditorSlider {...settings}>
          {editorData.map((item, index) => (
            <EditorBox
              width={350}
              height={200}
              key={index}
              imageURL={imageUrls[index]}
              onClick={() => {
                setSelectedRestaurant(item);
                navigation("/SearchDetailPage");
              }}
            >
              <SubEditorBox width={0} height={50} imageURL="">
                <StoreTitle>{item.placeName}</StoreTitle>
              </SubEditorBox>
            </EditorBox>
          ))}
        </EditorSlider>
      </ColumnBox>
    </>
  );
};
