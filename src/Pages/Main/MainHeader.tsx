import {useState} from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import Rectangle3 from "../../img/Rectangle3.png";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Api/axios";
import { searchDataState, searchState } from "../../Atom/Search";
import axios from "axios";

const MainContainer = styled.header`
  width: 100%;
  height: 95vh;
  background-image: url(${require("../../img/Rectangle.png")});
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    height: 85vh;
    padding-top: 15rem;
  }
`;

const ImageBox = styled.div`
  width: 45vw;
  height: 54.5vh;
  display: flex;
  justify-content: right;
  align-items: right;
  margin-top: 1.5vw;
  margin-left: -15vw;
`;

const Box = styled.div`
  display: block;
  margin-left: 5vw;
  margin-top: 7vw;
`;

const TextBox = styled.span`
  height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  @media (min-height: 1024px) {
    margin-bottom: -2vw;
    margin-top:2.5vw;
  }
`;

const TitleText = styled.h1`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 800;
  font-size: 3em;
  height: 2.5em;
  line-height: 3em;
  color: #fcfdf2;
`;

const SubText = styled.p`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 1.3em;
  line-height: 1.5em;
  color: #fcfdf2;
  @media (min-height: 1024px) {
    font-size: 1.6em;
  }
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchIcon = styled(AiOutlineSearch)`
    color: #969696;
    width:3vw;
    height:5vh;
    margin-right:-2.7vw;
`;

const SearchBar = styled.input`
   padding: 1vh; 
   margin-right:-0.1vw;
   font-size: 1.4rem;
   border: none; 
   border-bottom: 0.1rem solid #777777; 
   display:flex;
   float: center;
   width: 30vw; 
   height:3.5vh;
   background: transparent; 
   text-indent: 2.2vw;
   color: #777777;
   &:focus {
    outline:none;
}
`;

const SearchButton = styled.button`
  float: left;
  width: 9vw;
  height: 6vh;
  background: #767676;
  color: white;
  font-size: 1.3em;
  border: none;
  cursor: pointer;
  border-radius: 1vh;
  backdrop-filter: blur(0.5vw);
  background: rgba(252, 253, 242, 0.2);
`;

export const MainHeader = () => {
  const navigation = useNavigate();
  const [searchResults, setSearchResults] = useRecoilState(searchState);
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
      navigation("/SearchPage");
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
