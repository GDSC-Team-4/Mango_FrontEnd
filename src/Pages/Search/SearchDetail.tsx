import React,{useRef, useEffect} from "react";
import { useRecoilValue,useRecoilState} from "recoil";
import { useNavigate } from "react-router-dom";
import { selectedRestaurantState } from "../../Atom/Search";
import axiosInstance from "../../Api/axios";
import { DetailContainer,Box,DetailText,DetailTitle,DetailView,
        SubText, DetailImage,ClickLinkText,ReviewView,DetailImages,ImageBox,ViewText,ReviewIcon} from "./DetailStyle";
import { LoginState } from "../../Atom/Login";
import { GetReviewState } from "../../Atom/Review";

export const SearchDetailPage = () => {
    const selectedRestaurant = useRecoilValue(selectedRestaurantState);
    const [review,setReview] = useRecoilState(GetReviewState);
    const navigate = useNavigate();
    const isLoggedIn = useRecoilValue(LoginState);
    const parking = Math.random() < 0.5 ? '주차공간 없음' : '주차공간 있음';

    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const response = await axiosInstance.get(`review/${selectedRestaurant?.id}`);
          console.log(response.data);
          setReview(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      if (selectedRestaurant?.id) {
        fetchReviews();
      }
    }, [selectedRestaurant?.id]);

    console.log(selectedRestaurant);
    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);
    return (
        <>
            <DetailContainer>
              <Box>
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
                  <ImageBox>
                    <DetailImages/><DetailImages/><DetailImages/><DetailImages/>
                  </ImageBox>
                  <label placeholder="">{review[0]?.content}</label>
              </Box>
              <DetailImage/>
              
            </DetailContainer>
        </>
    );
};