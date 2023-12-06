import { atom, selector } from "recoil";
import { SearchDto, SearchData, SearchResult } from "../Interface/Search";

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

    export const searchStateTest = atom<SearchResult[]>({
    key: 'searchStateTest',
    default: [],  // 초기 상태는 빈 배열
  });
