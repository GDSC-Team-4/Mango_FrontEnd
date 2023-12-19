import { useRecoilState, useSetRecoilState } from "recoil";
import Rectangle3 from "../../img/Rectangle3.png";
import { MainContainer,ImageBox, Box,
         TextBox, TitleText, SubText, 
         SearchContainer, SearchIcon, 
         SearchBar, SearchButton } from "./MainHeaderStyle";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../Api/axios";
import { searchDataState ,searchValueState , searchStateTest } from "../../Atom/Search";

export const MainHeader = () => {
  const navigation = useNavigate();
  const setSearchResults = useSetRecoilState(searchStateTest);
  const [searchData, setSearchData] = useRecoilState(searchDataState);
  const setSearchValue = useSetRecoilState(searchValueState);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData({
      ...searchData,
      SearchPrams: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault(); 
    if (!searchData.SearchPrams.trim()) {
      alert('검색어를 입력해주세요.');
      return;
    }
    try {
      let searchQuery = searchData.SearchPrams;
      setSearchValue(searchData.SearchPrams);
      const response = await axiosInstance.get(`/search`, {
          params: { keyword: searchQuery }
      });  
      //const restaurantResults = response.data.data.documents.filter((doc: SearchResult) => doc.category_group_name === '음식점');
      setSearchResults(response.data.data);
      navigation("/SearchPage");
    } catch (error) {
      console.error('오류가 발생했습니다: ', error);
      alert('검색 중 오류가 발생했습니다. 다시 시도해 주세요.'); 
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
          <SearchBar 
            type="text" 
            placeholder="지역, 식당 또는 음식" 
            onChange={handleInputChange} 
            onKeyDown={(event) => { if (event.key==="Enter") handleSubmit(event)}}
          />
          <SearchButton type="submit" onClick={handleSubmit}>
            검색
          </SearchButton>
        </SearchContainer>
      </Box>
      <ImageBox>
        <img src={Rectangle3} alt="서브 이미지"/>
      </ImageBox>
    </MainContainer>
  );
};
