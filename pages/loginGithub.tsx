import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, useContext, useEffect } from "react";
import config from "../config";
import { StoreCtx } from "../context";
import BackUp from "../layouts/BackUp";
import { LayoutType } from "../types";
import { api } from "../utils/constant";
import _ from "../utils/index";

const LoginGithub: NextPage<{
  data?: any;
}> &
  LayoutType = ({ data }) => {
  const router = useRouter();
  const store = useContext(StoreCtx);
  useEffect(() => {
    console.log(data);
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
    <div className="h-screen bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center">
      <div className="w-2/6 border mockup-window border-base-300">
        <div className="flex justify-center px-4 py-16 border-t border-base-300">
          <div className="text-center w-full">
            <h1 className="text-4xl text-white mb-7">Github Resume</h1>
            <a
              href={`https://github.com/login/oauth/authorize?client_id=${config.client_id}&scope=${config.scope}`}
            >
              <div className="btn btn-primary">Login IN</div>
            </a>
          </div>
        </div>
      </div>
    </div>
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
      url: `${api.baseUrl}${api.getToken}`,
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
