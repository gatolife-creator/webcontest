import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const langState = atom({
    key: "langState",
    default: "ja",
    effects_UNSTABLE: [persistAtom]
});