import { ReactElement } from "react";
import { defaultStore, StoreCtx } from "../context";
import "../styles/globals.css";
import "../styles/iconfont.css";
import { AppPropsWithLayout } from "../types";

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page: ReactElement) => page);
  return getLayout(
    <StoreCtx.Provider value={defaultStore}>
      <Component {...pageProps} />
    </StoreCtx.Provider>
  );
}

export default MyApp;
