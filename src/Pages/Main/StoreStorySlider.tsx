import { randomImg } from "./MainImg";
import {
  Button,
  Container,
  Store,
  StoreText,
  StoreTextBox,
  StoreTitle,
  StyledSlider,
  Text,
  TextBox,
  Title,
  text2,
} from "./StoreListSlider";

export const StoreStorySlider = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <TextBox>
        <Title>믿고 보는 맛집 리스트</Title>
        <Text></Text>
        <Button>전체보기</Button>
      </TextBox>
      <StyledSlider {...settings}>
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <Store key={i} imageURL={randomImg[i].imageURL}>
            <StoreTextBox>
              <StoreTitle>{text2}</StoreTitle>
              <StoreText>한국인 맞춤 얼큰칼칼 칼국수 다모여!</StoreText>
            </StoreTextBox>
          </Store>
        ))}
      </StyledSlider>
    </Container>
  );
};
