import { atom, selector } from "recoil";
import { Review } from "../Interface/Review";
import { recoilPersist } from "recoil-persist";

export const starValueState = atom({
    key: 'starValueState',
    default: 0,
  });

  export const contentValueState = atom({
    key: 'contentValueState',
    default: '',
  });