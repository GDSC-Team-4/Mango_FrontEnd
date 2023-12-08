import React,{useRef, useState} from "react";
import { useRecoilState, useResetRecoilState,useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { dummyPlaces } from "./SearchDummy";
import { searchDataState,searchState,searchStateTest,searchValueState } from "../../Atom/Search";
import axiosInstance from "../../Api/axios";
import { SearchContainer, Box, TextBox,
         SearchBox, SearchIcon, SearchBar,
         SearchButton, SubTitle, RactangleBox,
         ColumnBox, RandomRactangle, SubRactangle,
         RactTitle, ReviewPoint} from "./SearchStyle";
import { dimensions } from "./SearchDummy";

export const SearchPage = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [searchData, setSearchData] = useRecoilState(searchDataState);
    const [searchResults, setSearchResults] = useRecoilState(searchStateTest);
    const [searchValue, setSearchValue] = useRecoilState(searchValueState);

    const searchButtonClick = async (event: React.MouseEvent) => {
        event.stopPropagation();
        if(searchRef.current) {
          const searchValue = searchRef.current.value;
          if (!searchValue.trim()) {
            alert('검색어를 입력해주세요.');
            return;
          }
          setSearchValue(searchValue);
          try {
            setSearchData({
              ...searchData,
              SearchPrams: searchValue,
            });
            const response = await axiosInstance.get(`map/search?query=${searchValue}`);
            setSearchResults(response.data.data.documents);
            console.log(response.data.data.documents);
            searchRef.current.value='';
            navigate('/SearchPage');  
          } catch (error) {
            console.error('오류가 발생했습니다: ', error); 
          }
        }   
      }
        
      const handleSearchClick = () => {
        if(searchRef.current) {
          searchRef.current.focus();
        }     
      }

    return (
        <>
            <SearchContainer>
                <Box>
                    <TextBox>
                    지역, 식당 또는 음식으로 검색해 나만의 맛집을 찾아보세요!
                    </TextBox>
                    <SearchBox onClick={handleSearchClick}>
                        <SearchIcon/>
                        <SearchBar type="text" placeholder="지역, 식당 또는 음식" ref={searchRef}/>
                        <SearchButton onClick={searchButtonClick}>검색</SearchButton>
                    </SearchBox>
                    <SubTitle>
                        "{searchValue}"
                    </SubTitle>
                    <RactangleBox>
                    <RandomRactangle width={dimensions[0].width} height={dimensions[0].height} imageURL={dimensions[0].imageURL}>
                        <SubRactangle width={0} height={7} imageURL="">
                        <RactTitle>{searchResults[0]?.place_name}</RactTitle>
                        <ReviewPoint>{dummyPlaces[0].reviewPoint}</ReviewPoint>
                        </SubRactangle>
                    </RandomRactangle>
                    <ColumnBox>
                        {searchResults.slice(1, 3).map((result, index) => (
                        <RandomRactangle key={index} width={dimensions[index + 1].width} height={dimensions[index + 1].height} imageURL={dimensions[index + 1].imageURL}>
                            <SubRactangle width={0} height={7} imageURL="">
                            <RactTitle>{result.place_name}</RactTitle>
                            <ReviewPoint>{dummyPlaces[1].reviewPoint}</ReviewPoint>
                            </SubRactangle>
                        </RandomRactangle>
                        ))}
                    </ColumnBox>
                    <ColumnBox>
                        {searchResults.slice(3, 5).map((result, index) => (
                        <RandomRactangle key={index} width={dimensions[index + 3].width} height={dimensions[index + 3].height} imageURL={dimensions[index + 3].imageURL}>
                            <SubRactangle width={0} height={7} imageURL="">
                            <RactTitle>{result.place_name}</RactTitle>
                            <ReviewPoint>{dummyPlaces[2].reviewPoint}</ReviewPoint>
                            </SubRactangle>
                        </RandomRactangle>
                        ))}
                    </ColumnBox>
                    </RactangleBox>
                    <RactangleBox>
                        <ColumnBox>
                            <RandomRactangle width={17} height={33} imageURL='https://picsum.photos/330/360'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>{dummyPlaces[4].place_name}</RactTitle>
                                    <ReviewPoint>{dummyPlaces[4].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                            <RandomRactangle width={17} height={17} imageURL='https://picsum.photos/330/180'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>미성옥</RactTitle>
                                </SubRactangle>
                            </RandomRactangle>
                        </ColumnBox>
                        <ColumnBox>
                            <RandomRactangle width={27} height={16} imageURL='https://picsum.photos/500/230'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>미성옥</RactTitle>
                                </SubRactangle>
                            </RandomRactangle>
                            <RandomRactangle width={27} height={34} imageURL='https://picsum.photos/500/390'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>미성옥</RactTitle>
                                </SubRactangle>
                            </RandomRactangle>
                        </ColumnBox>
                        <RandomRactangle width={24} height={50} imageURL='https://picsum.photos/410/430'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>미성옥</RactTitle>
                                </SubRactangle>
                            </RandomRactangle>
                    </RactangleBox>
                </Box>
            </SearchContainer>
        </>
    );
};