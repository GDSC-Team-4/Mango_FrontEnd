import { atom, selector } from "recoil";
import { Review } from "../Interface/Review";
import { recoilPersist } from "recoil-persist";

export const ReviewState = atom<Review>({
  key: 'ReviewState',
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
