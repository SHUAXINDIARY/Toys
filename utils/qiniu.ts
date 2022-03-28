import qiniu from "qiniu";
import { QiniuData, QiniuItem } from "../types";
import config from "../config";
import _ from "./index";

class Qiniu {
    private qn;
    constructor(ak: string, sk: string) {
        this.qn = new qiniu.auth.digest.Mac(ak, sk);
    }
    getBucketManager(config?: qiniu.conf.Config) {
        const _config = new qiniu.conf.Config();
        return new qiniu.rs.BucketManager(this.qn, {
            ..._config,
            ...config,
        });
    }
    getData(dist?: string) {
        const bm = this.getBucketManager();
        return new Promise<QiniuData>((res: any, rej: any) => {
            bm.listPrefix(
                "shuaxindiary",
                {
                    delimiter: "/",
                    // 文件访问名前缀（即空间名）
                    prefix: dist && `${dist}/`,
                },
                (e, respBody, respInfo) => {
                    console.log(respBody);
                    if (e) {
                        console.log(e);
                        rej(e);
                    }
                    const { items = [], commonPrefixes } = respBody;
                    res({
                        data: items.map((item: QiniuItem) => {
                            return {
                                ...item,
                                url: `${_.isDev() ? "http" : "https"}://${
                                    config.domain
                                }/${item.key}`,
                            };
                        }),
                        total: items.length,
                        dist: [...commonPrefixes] || [],
                    });
                }
            );
        });
    }
}
export default new Qiniu(config.qiniuyun.AK, config.qiniuyun.SK);
