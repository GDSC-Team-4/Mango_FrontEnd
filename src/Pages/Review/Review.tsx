import React, {useEffect,useState} from "react";
import { useRecoilState,useRecoilValue} from "recoil";
import { useNavigate } from "react-router-dom";
import { selectedRestaurantState } from "../../Atom/Search";
import { ReviewState} from "../../Atom/Review";
import axiosInstance from "../../Api/axios";
import { ReviewContainer, Box, PlaceTitle,SubText, 
        StarPoint, StarText, TextBox, Line, 
        InputBox, SubmitBox } from "./ReviewStyle";
import { starRatings } from "./ReviewValue";
import { ImageUpload } from "./ImageUpload";

export const ReviewPage = () => {
    const navigate = useNavigate();
    const selectedRestaurant = useRecoilValue(selectedRestaurantState || null);
    const [review, setReview] = useRecoilState(ReviewState);
    const [imageFile, setImageFile] = useState<File | null>(null);
    
    useEffect(() => {
        window.scrollTo(0, 0);  // 페이지 상단으로 스크롤 이동
      }, []);

    if (!selectedRestaurant) {
        return null;
    }


    const handleReviewSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
  
      const token = localStorage.getItem('accessToken');
  
      const formData = new FormData();
      if (imageFile) {
        formData.append('images', imageFile);
      }
      formData.append('content', review.content);
      formData.append('star', review.star.toString());

      try {
        const response = await axiosInstance.post(`review/${selectedRestaurant.id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          }
        });
        navigate("/");
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setReview(prevReview => ({
        ...prevReview,
        content: event.target.value
      }));
    }

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
                            selected={review.star === rating.value}
                            onClick={() => setReview(prevReview => ({
                              ...prevReview,
                              star: rating.value
                            }))}
                        >
                            <StarText>{rating.text}</StarText>
                        </StarPoint>
                    ))}
                    </Line>
                <InputBox 
                  placeholder="자세한 리뷰를 작성해주세요. 식당의 분위기와 서비스도 궁금해요!" 
                  value={review.content}
                  onChange={handleInputChange}
                  maxLength={500}
                />
                <ImageUpload setImageFile={setImageFile} />
                <SubmitBox onClick={handleReviewSubmit}>리뷰 등록하기</SubmitBox>
                </TextBox>
                </Box>
            </ReviewContainer>
        </>
    );
};