import { useEffect} from "react";
import { useRecoilValue,useRecoilState} from "recoil";
import { selectedRestaurantState } from "../../Atom/Search";
import axiosInstance from "../../Api/axios";
import { GetReviewState } from "../../Atom/Review";
import { GetReviewText, GetReviewTitle,TextBox, ImageBox, ReviewBox } from "./DetailStyle";

export const GetReview = () => {
    const selectedRestaurant = useRecoilValue(selectedRestaurantState);
    const [review,setReview] = useRecoilState(GetReviewState);
    

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
        <GetReviewTitle>Review</GetReviewTitle>
        {review.map((item, index) => (
            <ReviewBox key={index}>
                <TextBox>
                <ImageBox>
                    <GetReviewText>{item?.username}</GetReviewText>
                    <GetReviewText>별점: {item?.star}</GetReviewText>
                    <GetReviewText>등록일: {item?.createdDate?.slice(0, 10)}</GetReviewText>
                </ImageBox>
                <TextBox>
                    <GetReviewText>{item?.content}</GetReviewText>
                </TextBox>
                <p>{item?.images}</p>
                </TextBox>
            </ReviewBox>
        ))}
        </>
    );
};