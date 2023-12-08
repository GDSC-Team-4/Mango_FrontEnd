import { atom, selector } from "recoil";
import { SearchDto, SearchData, SearchResult } from "../Interface/Search";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
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
    default:[],  // 초기 상태는 빈 배열
    effects_UNSTABLE: [persistAtom],
  });
  
  export const searchValueState = atom({
    key: 'searchValueState',
    default: '',
  });