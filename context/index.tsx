import { createContext } from "react";
import { ResumeProps } from "../types";
export const defaultStore = {
  token: "",
  resumeData: {
    userInfo: {},
    language: [],
    topRepo: [],
    starList: [],
    followList: [],
  },
};
export const StoreCtx = createContext<{
  token: string;
  resumeData: ResumeProps;
}>(defaultStore);
