import React,{useRef, useEffect} from "react";
import { useRecoilValue} from "recoil";
import { useNavigate } from "react-router-dom";
import { selectedRestaurantState } from "../../Atom/Search";
import { DetailContainer,Box,DetailText,DetailTitle,DetailView,
        SubText, DetailImage,ClickLinkText,ReviewView,DetailImages,ImageBox,ViewText,ReviewIcon} from "./DetailStyle";

export const SearchDetailPage = () => {
    const selectedRestaurant = useRecoilValue(selectedRestaurantState);
    const navigate = useNavigate();
    const parking = Math.random() < 0.5 ? '주차공간 없음' : '주차공간 있음';
    console.log(selectedRestaurant);
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
    return (
        <>
            <DetailContainer>
              <Box>
                  <DetailTitle>
                    {selectedRestaurant?.place_name}
                  </DetailTitle>
                  <DetailText>
                    {selectedRestaurant?.address_name}
                  </DetailText>
                  <DetailView/>
                  <DetailText>
                  <SubText>전화 번호</SubText> 
                    {selectedRestaurant?.phone}
                  </DetailText>
                  <DetailText>
                  <SubText>카테 고리</SubText> 
                    {selectedRestaurant?.category_group_name}
                  </DetailText>
                  <DetailText>
                  <SubText>가게 종류</SubText> 
                    {selectedRestaurant?.category_name}
                  </DetailText>
                  <DetailText>
                    <SubText>가게 링크</SubText> 
                    <ClickLinkText onClick={()=>window.open(selectedRestaurant?.place_url,"_blank")}>{selectedRestaurant?.place_url}</ClickLinkText>
                  </DetailText>
                  <DetailText>
                  <SubText>주차 공간</SubText> 
                    {parking}
                  </DetailText>
                  <ReviewView><ReviewIcon/><ViewText onClick={()=>navigate('/ReviewPage')}>리뷰 쓰기</ViewText></ReviewView>
                  <ImageBox>
                    <DetailImages/><DetailImages/><DetailImages/><DetailImages/>
                  </ImageBox>
              </Box>
              <DetailImage/>
              
            </DetailContainer>
        </>
    );
};