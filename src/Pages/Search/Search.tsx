import React,{useRef,useEffect} from "react";
import { useRecoilState,useSetRecoilState} from "recoil";
import { useNavigate } from "react-router-dom";
import { dummyPlaces,dimensions } from "./SearchDummy";
import { searchDataState,searchStateTest,searchValueState,selectedRestaurantState } from "../../Atom/Search";
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
    const [searchResults, setSearchResults] = useRecoilState(searchStateTest);
    const [searchValue, setSearchValue] = useRecoilState(searchValueState);

    const setSelectedRestaurant = useSetRecoilState(selectedRestaurantState);

    useEffect(() => {
        window.scrollTo(0, 0);  // 페이지 상단으로 스크롤 이동
      }, []);

    const searchButtonClick = async (event: React.FormEvent) => {
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
            const response = await axiosInstance.get(`/search`, {
                params: { keyword: searchValue }
            });  
            //const restaurantResults = response.data.data.documents.filter((doc: SearchResult) => doc.category_group_name === '음식점');  
            setSearchResults(response.data.data);
            searchRef.current.value='';
            window.location.reload();
            setSearchValue(searchValue);
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
                        <SearchBar 
                            type="text" 
                            placeholder="지역, 식당 또는 음식" 
                            ref={searchRef}
                            onKeyDown={(event:any) => { if (event.key==="Enter") searchButtonClick(event)}}
                        />
                        <SearchButton onClick={searchButtonClick}>검색</SearchButton>
                    </SearchBox>
                    <SubTitle>
                        "{searchValue}"
                    </SubTitle>
                    <RactangleBox>
                        <RandomRactangle width={dimensions[0].width} height={dimensions[0].height} 
                                imageURL={dimensions[0].imageURL} 
                                onClick={()=>{
                                    setSelectedRestaurant(searchResults[0]);
                                    navigate("/SearchDetailPage")}}>
                            <SubRactangle width={0} height={7} imageURL="">
                            <RactTitle>{searchResults[0]?.placeName.slice(0, 11)}</RactTitle>
                            <ReviewPoint>{dummyPlaces[0].reviewPoint}</ReviewPoint>
                            </SubRactangle>
                        </RandomRactangle>
                        <ColumnBox>
                            {searchResults.slice(1, 3).map((result, index) => (
                            <RandomRactangle key={index} width={dimensions[index + 1].width} height={dimensions[index + 1].height}
                                 imageURL={dimensions[index + 1].imageURL} 
                                 onClick={()=>{
                                    setSelectedRestaurant(result);
                                    navigate("/SearchDetailPage")}}>
                                <SubRactangle width={0} height={7} imageURL="">
                                <RactTitle>{result.placeName.slice(0, 11)}</RactTitle>
                                <ReviewPoint>{dummyPlaces[1].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                            ))}
                        </ColumnBox>
                        <ColumnBox>
                            {searchResults.slice(3, 5).map((result, index) => (
                            <RandomRactangle key={index} width={dimensions[index + 3].width} height={dimensions[index + 3].height} 
                                imageURL={dimensions[index + 3].imageURL} 
                                onClick={()=>{
                                    setSelectedRestaurant(result);
                                    navigate("/SearchDetailPage")}}>
                                <SubRactangle width={0} height={7} imageURL="">
                                <RactTitle>{result.placeName.slice(0, 11)}</RactTitle>
                                <ReviewPoint>{dummyPlaces[2].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                            ))}
                        </ColumnBox>
                    </RactangleBox>
                    <RactangleBox>
                        <ColumnBox>
                            {searchResults.slice(5, 7).map((result, index) => (
                            <RandomRactangle key={index} width={dimensions[index + 5].width} height={dimensions[index + 5].height} 
                                imageURL={dimensions[index + 5].imageURL}
                                onClick={()=>{
                                    setSelectedRestaurant(result);
                                    navigate("/SearchDetailPage")}}>
                                <SubRactangle width={0} height={7} imageURL="">
                                <RactTitle>{result.placeName.slice(0, 11)}</RactTitle>
                                <ReviewPoint>{dummyPlaces[2].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                            ))}
                        </ColumnBox>
                        <ColumnBox>
                            {searchResults.slice(7, 9).map((result, index) => (
                            <RandomRactangle key={index} width={dimensions[index + 7].width} height={dimensions[index + 7].height} 
                                imageURL={dimensions[index + 7].imageURL}
                                onClick={()=>{
                                    setSelectedRestaurant(result);
                                    navigate("/SearchDetailPage")}}>
                                <SubRactangle width={0} height={7} imageURL="">
                                <RactTitle>{result.placeName.slice(0, 11)}</RactTitle>
                                <ReviewPoint>{dummyPlaces[2].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                            ))}
                        </ColumnBox>
                        <RandomRactangle width={dimensions[9].width} height={dimensions[9].height} 
                            imageURL={dimensions[9].imageURL}
                            onClick={()=>{
                                setSelectedRestaurant(searchResults[9]);
                                navigate("/SearchDetailPage")}}>
                                <SubRactangle width={0} height={7} imageURL="">
                                    <RactTitle>{searchResults[9]?.placeName.slice(0, 11)}</RactTitle>
                                    <ReviewPoint>{dummyPlaces[2].reviewPoint}</ReviewPoint>
                                </SubRactangle>
                            </RandomRactangle>
                    </RactangleBox>
                </Box>
            </SearchContainer>
        </>
    );
};