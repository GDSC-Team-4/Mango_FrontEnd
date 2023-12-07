import {useState} from "react";
import { useRecoilState } from "recoil";
import Rectangle3 from "../../img/Rectangle3.png";
import { MainContainer,ImageBox, Box,
         TextBox, TitleText, SubText, 
         SearchContainer, SearchIcon, 
         SearchBar, SearchButton } from "./MainHeaderStyle";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Api/axios";
import { searchDataState, searchState, searchStateTest } from "../../Atom/Search";

export const MainHeader = () => {
  const navigation = useNavigate();
  const [searchResults, setSearchResults] = useRecoilState(searchStateTest);
  const [searchData, setSearchData] = useRecoilState(searchDataState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData({
      ...searchData,
      SearchPrams: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 
    try {
      const response = await axiosInstance.get(`/map/search?query=${searchData.SearchPrams}`); 
      setSearchResults(response.data);
      console.log(response.data.data.documents[0].place_url)
      navigation("/");
    } catch (error) {
      console.error('오류가 발생했습니다: ', error); 
    }
  };

  return (
    <MainContainer>
      <Box>
        <TextBox>
          <TitleText>포도플레이트</TitleText>
          <SubText>
            솔직한 리뷰, 믿을 수 있는 평점!
            <br /> 포도플레이트에서 나만의 맛집을 찾아보세요.
          </SubText>
        </TextBox>
        <SearchContainer>
          <SearchIcon />
          <SearchBar type="text" placeholder="지역, 식당 또는 음식" onChange={handleInputChange}/>
          <SearchButton type="submit" onClick={handleSubmit}>
            검색
          </SearchButton>
        </SearchContainer>
      </Box>
      <ImageBox>
        <img src={Rectangle3} />
      </ImageBox>
    </MainContainer>
  );
};
