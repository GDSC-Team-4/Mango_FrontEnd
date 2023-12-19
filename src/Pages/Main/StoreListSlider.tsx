import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { randomImg } from "./MainImg";

const text1 = `별점과 리뷰를 바탕으로 선정한\n 믿고 보는 맛집 리스트\n\n포도플레이트가 꼽은\n 특별한 맛집을 만나보세요.`;
export const text2 = `얼큰 칼국수 맛집 베스트 20\n`;

export const Container = styled.div`
  margin-top: 10vh;
  align-items: center;
  margin-left: 20vw;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 350px;
`;

export const TextBox = styled.div`
  width: 750px;
  height: 400px;
  display: flex;
  flex-direction: column;
  gap: 4vh;
`;

export const Title = styled.span`
  font-size: 25px;
  font-weight: 600;
`;

export const Text = styled.span`
  font-size: 18px;
`;

export const Store = styled.div<{ imageURL: string }>`
  background-image: url(${(props) => props.imageURL});
  width: 350px;
  height: 400px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
`;

export const StoreTextBox = styled.div`
  background-color: #25252d;
  color: #fff;
  width: 100%;
  height: 100px;
  position: absolute;
  bottom: 0;
`;

export const StoreTitle = styled.span`
  font-size: 16px;
  position: absolute;
  top: 25px;
  left: 25px;
`;

export const StoreText = styled(StoreTitle)`
  font-size: 14px;
  top: 50px;
`;

export const Button = styled.button`
  width: 148px;
  height: 47px;
  border-radius: 100px;
  background: rgba(17, 17, 17, 0.2);
  backdrop-filter: blur(5px);
  font-size: 16px;
  border: none;
`;

export const StyledSlider = styled(Slider)`
  height: 400px; //슬라이드 컨테이너 영역
  overflow: hidden;

  .slick-list {
    height: 100%;
    margin: 0 -20px;
    box-sizing: border-box;
  }

  .slick-slide > div {
    margin: 0 20px;
  }
`;

export const StoreListSlider = () => {
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
        <Text>{text1}</Text>
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
