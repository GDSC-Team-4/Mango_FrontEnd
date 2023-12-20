import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";
import { randomImg } from "./MainImg";
import { useRecoilValue } from "recoil";
import { ListDataState } from "../../Atom/Main";
import { useEffect, useState } from "react";

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
  margin-right: 5vw;
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

export const Store = styled.div<{ imageurl: string }>`
  background-image: url(${(props) => props.imageurl});
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

export function isValidImage(url: string) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = url;
  });
}

export const StoreListSlider = () => {
  const listData = useRecoilValue(ListDataState);
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  useEffect(() => {
    // 이미지 URL 유효성 검사를 비동기로 처리
    Promise.all(
      listData.map(async (item, index) => {
        const isValid = await isValidImage(item.imageUrl);
        return isValid ? item.imageUrl : randomImg[index].imageurl;
      })
    ).then((urls) => {
      setImageUrls(urls); // 검사된 URL들을 상태에 저장
    });
  }, [listData]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <TextBox>
        <Title>믿고 보는 강남 맛집</Title>
        <Text>{text1}</Text>
        <Button>전체보기</Button>
      </TextBox>

      <StyledSlider {...settings}>
        {listData.map((item, index) => (
          <Store
            key={index}
            imageurl={imageUrls[index]} // 상태에서 이미지 URL 사용
          >
            <StoreTextBox>
              <StoreTitle>{item.placeName}</StoreTitle>
              <StoreText>{item.roadAddressName}</StoreText>
            </StoreTextBox>
          </Store>
        ))}
      </StyledSlider>
    </Container>
  );
};
