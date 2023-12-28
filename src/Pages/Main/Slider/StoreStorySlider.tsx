import {
  Store,
  StoreText,
  StoreTextBox,
  StoreTitle,
  StoryButton,
  StoryContainer,
  StorySlider,
  StoryTextBox,
  StoryTitle,
} from "./StyledSlider";
import { randomImg } from "../MainImg";
import bgImg from "../../../img/MainBg.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  searchStateTest,
  searchValueState,
  selectedRestaurantState,
} from "../../../Atom/Search";
import { StoryDataState } from "../../../Atom/Main";
import { useRecoilValue, useSetRecoilState } from "recoil";
import axiosInstance from "../../../Api/axios";
import { isValidImage } from "./StoreListSlider";

export const StoreStorySlider = () => {
  const storyData = useRecoilValue(StoryDataState);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const navigation = useNavigate();
  const setSearchResults = useSetRecoilState(searchStateTest);
  const setSearchValue = useSetRecoilState(searchValueState);
  const setSelectedRestaurant = useSetRecoilState(selectedRestaurantState);

  const searchQuery = "홍대입구";
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
      storyData.map(async (item, index) => {
        const isValid = await isValidImage(item.imageUrl);
        return isValid ? item.imageUrl : randomImg[index].imageurl;
      })
    ).then((urls) => {
      setImageUrls(urls); // 검사된 URL들을 상태에 저장
    });
  }, [storyData]);
  const settings = {
    dots: false,
    infinite: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <StoryContainer bgImg={bgImg}>
      <StoryTextBox>
        <StoryTitle>홍대입구 맛집 스토리</StoryTitle>
        <StoryButton onClick={onClick}>전체보기</StoryButton>
      </StoryTextBox>
      <StorySlider {...settings}>
        {storyData.map((item, index) => (
          <Store
            key={index}
            imageurl={imageUrls[index]}
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
      </StorySlider>
    </StoryContainer>
  );
};
