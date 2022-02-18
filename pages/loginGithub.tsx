import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, useContext, useEffect } from "react";
import config from "../config";
import { StoreCtx } from "../context";
import BackUp from "../layouts/BackUp";
import { LayoutType } from "../types";
import _ from "../utils/index";

const LoginGithub: NextPage<{
  data?: any;
}> &
  LayoutType = ({ data }) => {
  const router = useRouter();
  const store = useContext(StoreCtx);
  useEffect(() => {
    if (data && data.access_token) {
      store.token = data.access_token;
      router.push({
        pathname: "/resume",
        query: {
          token: data.access_token,
        },
      });
    } else {
      router.replace("/loginGithub");
    }
  }, []);
  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${config.client_id}&scope=${config.scope}&redirect_uri=${config.redirect_uri}`}
    >
      <div className="btn btn-primary">登陆</div>
    </a>
  );
};

export default LoginGithub;

LoginGithub.getLayout = (page: ReactElement) => <BackUp>{page}</BackUp>;
// 服务端请求后渲染
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  if (!query.code) {
    return {
      props: {},
    };
  }
  try {
    // github 定向
    const { data } = await _.req({
      url: "http://localhost:3000/api/github",
      opts: {
        method: "POST",
        body: JSON.stringify({
          code: query?.code,
        }),
      },
    });
    return {
      props: {
        data: {
          ...data,
        },
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
    };
  }
};
