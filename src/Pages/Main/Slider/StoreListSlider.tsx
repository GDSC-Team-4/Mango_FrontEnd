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
} from "./StyledSlider";
import { randomImg } from "../MainImg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  searchStateTest,
  searchValueState,
  selectedRestaurantState,
} from "../../../Atom/Search";
import { ListDataState } from "../../../Atom/Main";
import { useRecoilValue, useSetRecoilState } from "recoil";
import axiosInstance from "../../../Api/axios";

const text1 = `별점과 리뷰를 바탕으로 선정한\n 믿고 보는 맛집 리스트\n\n포도플레이트가 꼽은\n 특별한 맛집을 만나보세요.`;
export const text2 = `얼큰 칼국수 맛집 베스트 20\n`;

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
  const setSearchValue = useSetRecoilState(searchValueState);
  const setSearchResults = useSetRecoilState(searchStateTest);
  const setSelectedRestaurant = useSetRecoilState(selectedRestaurantState);

  const navigation = useNavigate();
  const [imageUrls, setImageUrls] = useState<string[]>([]);

  const searchQuery = "강남";

  const onClick = async () => {
    try {
      setSearchValue(searchQuery);
      const response = await axiosInstance.get(`/search`, {
        params: { keyword: searchQuery },
      });
      setSearchResults(response.data.data);
      navigation("/SearchPage");
    } catch (error) {
      alert("오류가 발생했습니다");
    }
  };

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
        <Button onClick={onClick}>전체보기</Button>
      </TextBox>

      <StyledSlider {...settings}>
        {listData.map((item, index) => (
          <Store
            key={index}
            imageurl={imageUrls[index]} // 상태에서 이미지 URL 사용
            onClick={() => {
              setSelectedRestaurant(item);
              navigation("/SearchDetailPage");
            }}
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
