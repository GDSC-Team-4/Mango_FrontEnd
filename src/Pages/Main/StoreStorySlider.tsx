import { randomImg } from "./MainImg";
import bgImg from "../../img/MainBg.jpg";
import {
  Button,
  Container,
  Store,
  StoreText,
  StoreTextBox,
  StoreTitle,
  StyledSlider,
  Title,
  text2,
} from "./StoreListSlider";
import styled from "styled-components";

const StoryContainer = styled(Container)`
  flex-direction: column;
  align-items: normal;
  background-image: url(${bgImg});
  background-size: cover;
  height: 500px;
  margin-left: 0;
`;

const StoryTextBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const StoryTitle = styled(Title)`
  margin-top: 38px;
  margin-left: 70px;
`;

const StoryButton = styled(Button)`
  margin-top: 38px;
  margin-left: 70px;
`;

const StorySlider = styled(StyledSlider)`
  margin-top: 15px;
  overflow: visible;
`;

export const StoreStorySlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <StoryContainer>
      <StoryTextBox>
        <StoryTitle>포도플레이트 맛집 스토리</StoryTitle>
        <StoryButton>전체보기</StoryButton>
      </StoryTextBox>
      <StorySlider {...settings}>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <Store key={i} imageURL={randomImg[i].imageURL}>
            <StoreTextBox>
              <StoreTitle>{text2}</StoreTitle>
              <StoreText>한국인 맞춤 얼큰칼칼 칼국수 다모여!</StoreText>
            </StoreTextBox>
          </Store>
        ))}
      </StorySlider>
    </StoryContainer>
  );
};
