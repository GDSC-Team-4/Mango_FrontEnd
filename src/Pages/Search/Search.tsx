import React,{useRef, useState} from "react";
import { useRecoilState, useResetRecoilState,useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";
import { dummyPlaces } from "./SearchDummy";
import { SearchData } from "../../Interface/Search";
import { searchDataState,searchState  } from "../../Atom/Search";
import axiosInstance from "../../Api/axios";
import { SearchContainer, Box, TextBox,
         SearchBox, SearchIcon, SearchBar,
         SearchButton, SubTitle, RactangleBox,
         ColumnBox, RandomRactangle, SubRactangle,
         RactTitle, ReviewPoint} from "./SearchStyle";

export const SearchPage = () => {
    const searchRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    const [searchData, setSearchData] = useRecoilState(searchDataState);
    const [searchResults, setSearchResults] = useRecoilState(searchState);
    //const searchResults = useRecoilValue(searchState);
       
    const searchButtonClick = async (event: React.MouseEvent) => {
        event.stopPropagation();
        if(searchRef.current) {
          const searchValue = searchRef.current.value;
          if (!searchValue.trim()) {
            alert('검색어를 입력해주세요.');
            return;
          }
          try {
            setSearchData({
              ...searchData,
              SearchPrams: searchValue,
            });
            const response = await axiosInstance.get(`map/search?query=${searchValue}`);
            setSearchResults(response.data);
            console.log(response.data);
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
                        "합정역 맛집"
                    </SubTitle>
                    <RactangleBox>
                        <RandomRactangle width={24} height={50} imageURL='https://picsum.photos/400/500'>
                            <SubRactangle width={0} height={7} imageURL="">
                                <RactTitle>{searchResults[0]?.place_name}</RactTitle>
                                <ReviewPoint>{dummyPlaces[0].reviewPoint}</ReviewPoint>
                            </SubRactangle>
                        </RandomRactangle>
                        <ColumnBox>
                            <RandomRactangle width={21} height={33} imageURL='https://picsum.photos/370/240'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>{dummyPlaces[1].place_name}</RactTitle>
                                    <ReviewPoint>{dummyPlaces[1].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                            <RandomRactangle width={21} height={17} imageURL='https://picsum.photos/370/150'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>{dummyPlaces[2].place_name}</RactTitle>
                                    <ReviewPoint>{dummyPlaces[2].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                        </ColumnBox>
                        <ColumnBox>
                            <RandomRactangle width={24} height={16} imageURL='https://picsum.photos/400/180'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>{dummyPlaces[3].place_name}</RactTitle>
                                    <ReviewPoint>{dummyPlaces[3].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                            <RandomRactangle width={24} height={34} imageURL='https://picsum.photos/400/300'>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>{dummyPlaces[4].place_name}</RactTitle>
                                    <ReviewPoint>{dummyPlaces[4].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
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