import React,{useRef} from "react";
import { useRecoilState} from "recoil";
import { useNavigate } from "react-router-dom";
import { dummyPlaces } from "./SearchDummy";
import { searchDataState,searchStateTest,searchValueState } from "../../Atom/Search";
import axiosInstance from "../../Api/axios";
import { SearchContainer, Box, TextBox,
         SearchBox, SearchIcon, SearchBar,
         SearchButton, SubTitle, RactangleBox,
         ColumnBox, RandomRactangle, SubRactangle,
         RactTitle, ReviewPoint} from "./SearchStyle";
import { dimensions } from "./SearchDummy";

export const SearchDetailPage = () => {
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
            //navigate('/SearchPage');  
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
                </Box>
            </SearchContainer>
        </>
    );
};