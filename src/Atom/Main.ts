import { atom } from "recoil";
import { MainDto } from "../Interface/Main";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const ListDataState = atom<MainDto[]>({
    key: "listDataState",
    default: [],
    effects_UNSTABLE: [persistAtom],    
  })

export const StoryDataState = atom<MainDto[]>({
    key: "storyDataState",
    default: [],
    effects_UNSTABLE: [persistAtom],    
  })

export const EditorDataState = atom<MainDto[]>({
    key: "editorDataState",
    default: [],
    effects_UNSTABLE: [persistAtom],    
  })      