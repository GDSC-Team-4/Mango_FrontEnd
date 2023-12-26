import React, {useState,useEffect} from "react";
import { useRecoilState,useRecoilValue } from "recoil";
import { useNavigate,useLocation  } from "react-router-dom";
import { ReviewState} from "../../Atom/Review";
import { selectedRestaurantState } from "../../Atom/Search";
import axiosInstance from "../../Api/axios";
import { ReviewContainer, Box, PlaceTitle,SubText, 
        StarPoint, StarText, TextBox, Line, 
        InputBox, SubmitBox } from "./ReviewStyle";
import { starRatings } from "./ReviewValue";
import { ImageUpload } from "./ImageUpload";

export const ReviewUpdatePage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedRestaurant = useRecoilValue(selectedRestaurantState);
    const [review, setReview] = useRecoilState(ReviewState);
    const [imageFile, setImageFile] = useState<File | null>(null);
    const reviewToUpdate = location.state;

    useEffect(() => {
        // 이전 페이지에서 전달받은 review data를 Recoil state에 저장
        setReview(reviewToUpdate);
    }, [reviewToUpdate]);

    const handleReviewUpdate = async (event: React.FormEvent) => {
        event.preventDefault();
    
        const token = localStorage.getItem('accessToken');
    
        const formData = new FormData();
        if (imageFile) {
            formData.append('images', imageFile);
        }
        formData.append('content', review.content);
        formData.append('star', review.star.toString());
    
        try {
            await axiosInstance.put(`review/${reviewToUpdate.id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`,
                }
            });
            navigate(-1);
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
                <SubmitBox onClick={handleReviewUpdate}>리뷰 수정하기</SubmitBox>
                </TextBox>
                </Box>
            </ReviewContainer>
        </>
    );
};
