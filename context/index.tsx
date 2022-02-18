import { createContext } from "react";
export const defaultStore = {
  token: "",
};
export const StoreCtx = createContext(defaultStore);
