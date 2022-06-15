
import { api } from "./utils/constant";
import _ from "./utils/index";
const config = {
    client_id: "cec0eb45c92ed8f83f30",
    scope: "repo:status",
    redirect_uri: `${api.baseUrl}/loginGithub`,
    // 开发环境 ？本地配置：读取vercel配置
    client_secret: _.isDev() ? "" : process.env.client_secret,
    qiniuyun: {
        AK: _.isDev() ? "" : (process.env.AK as string),
        SK: _.isDev() ? "" : (process.env.SK as string),
    },
    domain: "img.shuaxinjs.cn",
    space: "shuaxindiary",
};

export default config;


