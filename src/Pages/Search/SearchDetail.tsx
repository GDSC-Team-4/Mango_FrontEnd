import React,{useRef} from "react";
import { useRecoilState,useRecoilValue} from "recoil";
import { useNavigate } from "react-router-dom";
import { dummyPlaces } from "./SearchDummy";
import { selectedRestaurantState ,searchStateTest,searchValueState } from "../../Atom/Search";
import axiosInstance from "../../Api/axios";
import { DetailContainer,Box,DetailText,DetailTitle,DetailView,
        SubText, DetailImage,ClickLinkText,ReviewView,DetailImages} from "./DetailStyle";

export const SearchDetailPage = () => {
    const selectedRestaurant = useRecoilValue(selectedRestaurantState);
    const parking = Math.random() < 0.5 ? '주차공간 없음' : '주차공간 있음';
    console.log(selectedRestaurant);
    
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
                  <DetailText onClick={()=>window.open(selectedRestaurant?.place_url,"_blank")}>
                    <SubText>가게 링크</SubText> 
                    <ClickLinkText>{selectedRestaurant?.place_url}</ClickLinkText>
                  </DetailText>
                  <DetailText>
                  <SubText>주차 공간</SubText> 
                    {parking}
                  </DetailText>
                  <ReviewView/>
                  <DetailImages/>
                  
              </Box>
              <DetailImage/>
            </DetailContainer>
        </>
    );
};