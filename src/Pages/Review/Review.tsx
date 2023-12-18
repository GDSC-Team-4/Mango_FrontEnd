import {useEffect} from "react";
import { constSelector, useRecoilState,useRecoilValue} from "recoil";
import { useNavigate } from "react-router-dom";
import { selectedRestaurantState } from "../../Atom/Search";
import { starValueState,contentValueState } from "../../Atom/Review";
import { Review } from "../../Interface/Review";
import axiosInstance from "../../Api/axios";
import { ReviewContainer, Box, PlaceTitle,SubText, 
        StarPoint, StarText, TextBox, Line, 
        InputBox, PhotoBox, SubmitBox, PhotoIcon } from "./ReviewStyle";
import { starRatings } from "./ReviewValue";

export const ReviewPage = () => {
    const navigate = useNavigate();
    const selectedRestaurant = useRecoilValue(selectedRestaurantState || null);
    const [starValue, setStarValue] = useRecoilState(starValueState);
    const [reviewContent, setReviewContent] = useRecoilState(contentValueState);

    useEffect(() => {
        window.scrollTo(0, 0);  // 페이지 상단으로 스크롤 이동
      }, []);

    if (!selectedRestaurant) {
        return null;
    }


    const handleReviewSubmit = async () => {
        const review: Review = {
          content: reviewContent,
          star: starValue,
          images: [] // 이미지는 별도로 처리가 필요합니다.
        };

        try {
          const response = await axiosInstance.post(`/reviews/${selectedRestaurant.id}`, review);
          console.log(response.data);
        } catch (error) {
          console.error(error);
        }
      };
        console.log(starValue);
    return (
        <>
            <ReviewContainer>
                <Box>
                <TextBox>
                    <Line>
                    <PlaceTitle>{selectedRestaurant?.placeName}</PlaceTitle>
                    <SubText>은 어떠셨나요?</SubText>
                    </Line>
                    <Line>
                    {starRatings.map(rating => (
                        <StarPoint
                            key={rating.value}
                            selected={starValue === rating.value}
                            onClick={() => setStarValue(rating.value)}
                        >
                            <StarText>{rating.text}</StarText>
                        </StarPoint>
                    ))}
                    </Line>
                <InputBox placeholder="자세한 리뷰를 작성해주세요. 식당의 분위기와 서비스도 궁금해요!">

                </InputBox>
                <PhotoBox><PhotoIcon/>사진 첨부하기</PhotoBox>
                <SubmitBox onClick={handleReviewSubmit}>리뷰 등록하기</SubmitBox>
                </TextBox>
                </Box>
            </ReviewContainer>
        </>
    );
};