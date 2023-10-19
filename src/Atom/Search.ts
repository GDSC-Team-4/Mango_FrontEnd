import { atom, selector } from "recoil";
import { SearchDto, SearchData } from "../Interface/Search";

export const searchState = atom<SearchDto[]>({
    key: "searchState",
    default: [],
  });

export const searchDataState = atom<SearchData>({
    key: "searchDataState",
    default: {
        SearchPrams: '',
    },    
})
