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
import { randomImg } from "./MainImg";
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
import constant from "../ConstantMain";
import { SearchResult } from "../../../Interface/Search";

export const StoreStorySlider = () => {
  const storyData = useRecoilValue(StoryDataState);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const navigation = useNavigate();
  const setSearchResults = useSetRecoilState(searchStateTest);
  const setSearchValue = useSetRecoilState(searchValueState);
  const setSelectedRestaurant = useSetRecoilState(selectedRestaurantState);

  const searchQuery = constant.KEYWORDS.STORY_KEYWORD;
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
        <StoryTitle>{constant.TEXT.HONGDAE}</StoryTitle>
        <StoryButton onClick={onClick}>{constant.TEXT.BTN}</StoryButton>
      </StoryTextBox>
      <StorySlider {...settings}>
        {storyData.map((item, index) => (
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
      </StorySlider>
    </StoryContainer>
  );
};
