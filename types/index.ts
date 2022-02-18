import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type LayoutType = {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: {
    getLayout?: (page: ReactElement) => ReactNode;
  };
};

// devicon style
export enum IconStyle {
  LINE = "line",
  LINEWORDMARK = "line-wordmark",
  PLAIN = "plain",
  PLAINWORDMARK = "plain-wordmark",
}

export type LanguageIcon = {
  style?: IconStyle;
  language: string;
  colored?: boolean;
};

export type HomeCardProps = {
  title: string;
  url: string;
  desc?: string;
  openNewTag?: Boolean;
};
