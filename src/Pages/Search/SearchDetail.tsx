import { useEffect} from "react";
import { useRecoilValue} from "recoil";
import { useNavigate } from "react-router-dom";
import { selectedRestaurantState } from "../../Atom/Search";
import { DetailContainer,Box,DetailText,DetailTitle,DetailView,
        SubText, DetailImage,ClickLinkText,ReviewView,DetailImages,ImageBox,ViewText,ReviewIcon, TotalBox} from "./DetailStyle";
import { LoginState } from "../../Atom/Login";
import { GetReview } from "./GetReview";

export const SearchDetailPage = () => {
    const selectedRestaurant = useRecoilValue(selectedRestaurantState);
    const navigate = useNavigate();
    const isLoggedIn = useRecoilValue(LoginState);
    const parking = Math.random() < 0.5 ? '주차공간 없음' : '주차공간 있음';

    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
    return (
        <>
            <DetailContainer>
              <Box>
                <ImageBox>
                <TotalBox>
                  <DetailTitle>
                    {selectedRestaurant?.placeName}
                  </DetailTitle>
                  <DetailText>
                    {selectedRestaurant?.addressName}
                  </DetailText>
                  <DetailView/>
                  <DetailText>
                  <SubText>전화 번호</SubText> 
                    {selectedRestaurant?.phone}
                  </DetailText>
                  <DetailText>
                  <SubText>카테 고리</SubText> 
                    {selectedRestaurant?.categoryGroupName}
                  </DetailText>
                  <DetailText>
                  <SubText>가게 종류</SubText> 
                    {selectedRestaurant?.categoryName}
                  </DetailText>
                  <DetailText>
                    <SubText>가게 링크</SubText> 
                    <ClickLinkText onClick={()=>window.open(selectedRestaurant?.placeUrl,"_blank")}>{selectedRestaurant?.placeUrl}</ClickLinkText>
                  </DetailText>
                  <DetailText>
                  <SubText>주차 공간</SubText> 
                    {parking}
                  </DetailText>
                  {isLoggedIn && (
                  <ReviewView><ReviewIcon/><ViewText onClick={()=>navigate('/ReviewPage')}>리뷰 쓰기</ViewText></ReviewView>
                  )}
                  </TotalBox>
                  <DetailImage/>
                  </ImageBox>
                  <ImageBox>
                    <DetailImages/><DetailImages/><DetailImages/><DetailImages/>
                  </ImageBox>
                  <GetReview/>
              </Box>
            </DetailContainer>
        </>
    );
};