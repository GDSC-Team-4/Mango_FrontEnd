import { useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue,useRecoilState} from "recoil";
import { selectedRestaurantState } from "../../Atom/Search";
import axiosInstance from "../../Api/axios";
import { GetReviewState } from "../../Atom/Review";
import { LoginState } from "../../Atom/Login";
import { GetReviewText, GetReviewTitle,TextBox, ImageBox, ReviewBox, ReviewImg, GetReviewContent, EditButton, DetailContainer, Box } from "../Search/DetailStyle";

export const GetMyReview = () => {
    const selectedRestaurant = useRecoilValue(selectedRestaurantState);
    const [review,setReview] = useRecoilState(GetReviewState);
    const navigate = useNavigate();
    const isLoggedIn = useRecoilValue(LoginState);

    useEffect(() => {
      const fetchReviews = async () => {
        try {
          const token = localStorage.getItem('accessToken');
          const response = await axiosInstance.get(`review`,{
            headers: {
                Authorization: `Bearer ${token}`,
            }
          })
          setReview(response.data);
        } catch (error) {
          console.error(error);
        }
      };
    
      if (selectedRestaurant?.id) {
        fetchReviews();
      }
    }, [selectedRestaurant?.id]);

    useEffect(() => {
      window.scrollTo(0, 0); 
    }, []);

    const deleteClick = async (id:number) => {
      const token = localStorage.getItem('accessToken');
      try {
          await axiosInstance.delete(`/review/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
          })
          
          const response = await axiosInstance.get(`review/${selectedRestaurant?.id}`);
          setReview(response.data);
      } catch (error) {
          console.error(error);
      }
    }

    return (
        <>
        <DetailContainer>
            <Box>
                <GetReviewTitle>My Review</GetReviewTitle>
                {review.map((item, index) => (
                    <ReviewBox key={index}>
                        <TextBox>
                            <GetReviewText>{selectedRestaurant?.placeName}</GetReviewText>
                            <ImageBox>
                                <GetReviewText>{item?.username}</GetReviewText>
                                <GetReviewText>별점: {item?.star}</GetReviewText>
                                <GetReviewText>등록일: {item?.createdDate?.slice(0, 10)}</GetReviewText>
                                {isLoggedIn && (
                                <>
                                <EditButton onClick={() => deleteClick(item?.id)}>리뷰 삭제</EditButton>
                                <EditButton onClick={() => navigate(`/ReviewUpdatePage`, { state: item })}>리뷰 수정</EditButton>  
                                </>
                                )}
                                    </ImageBox>
                            <TextBox>
                                <GetReviewContent>{item?.content}</GetReviewContent>
                                <ImageBox>
                                {item?.imageUrls?.map((imageUrl, imageIndex) => (
                                    <ReviewImg key={imageIndex} src={imageUrl} alt="Review" />
                                ))}
                                </ImageBox>
                            </TextBox>
                        </TextBox>
                    </ReviewBox>
                ))}
            </Box>
        </DetailContainer>
        </>
    );
};