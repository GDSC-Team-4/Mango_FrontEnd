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
import { randomImg } from "./MainImg";
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
import constant from "../ConstantMain";
import { SearchResult } from "../../../Interface/Search";

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
  const [isDragging, setIsDragging] = useState(false);
  const searchQuery = constant.KEYWORDS.LIST_KEYWORD;

  const onClick = async () => {
    try {
      setSearchValue(searchQuery);
      const response = await axiosInstance.get(`/search`, {
        params: { keyword: searchQuery },
      });
      setSearchResults(response.data.data);
      navigation("/SearchPage");
    } catch (error) {
      alert(constant.TEXT.ERROR);
    }
  };

  const handleMouseDown = () => {
    setIsDragging(false);
  };

  const handleMouseMove = () => {
    setIsDragging(true);
  };

  const handleMouseUp = (item: SearchResult) => {
    if (isDragging) return; // 드래그 중이면 클릭 이벤트를 리턴(방지)함
    setSelectedRestaurant(item);
    navigation("/SearchDetailPage");
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
        <Title>{constant.TEXT.GANGNAM}</Title>
        <Text>{constant.TEXT.EXPLAIN}</Text>
        <Button onClick={onClick}>{constant.TEXT.BTN}</Button>
      </TextBox>

      <StyledSlider {...settings}>
        {listData.map((item, index) => (
          <Store
            key={index}
            imageurl={imageUrls[index]}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={() => handleMouseUp(item)}
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
