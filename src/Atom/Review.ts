import { atom } from "recoil";
import { Review,ReviewUser } from "../Interface/Review";


export const ReviewState = atom<Review>({
  key: 'ReviewState',
  default: {
    content: '',
    star: 0,
    images: [],
  },
});

export const ReviewChangeState = atom<Review>({
  key: 'ReviewChangeState',
  default: {
    content: '',
    star: 0,
    images: [],
  },
});

export const imageFileState = atom<File | null>({
  key: "imageFileState",
  default: null,
});

export const GetReviewState = atom<ReviewUser[]>({
  key: 'GetReviewState',
  default: [],
});

export const UpdateReviewState = atom<ReviewUser>({
  key: 'UpdateReviewState',
  default: {
    id: 0,
    username: '',
    createdDate: '',
    updatedDate: '',
    userId: '',
    restaurantId:'',
    content: '',
    star: 0,
    imageUrls: [],
  }}
);