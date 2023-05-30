import qiniu from "qiniu";
import config from "../config";
import { QiniuData, QiniuItem } from "../types";
import _ from "./index";
import { readFile } from "fs/promises";
import { resolve } from "path";
class AuthSDK {
    private qn: any;
    constructor() {
        this.initSDK();
    }
    async initSDK() {
        if (_.isDev()) {
            // 本地执行读取本地配置
            const data = await readFile(
                resolve(__dirname, "../../../config.json"),
                {
                    encoding: "ascii",
                }
            );
            const { AK, SK } = JSON.parse(data);
            this.qn = new qiniu.auth.digest.Mac(AK, SK);
        } else {
            this.qn = new qiniu.auth.digest.Mac(
                config.qiniuyun.AK,
                config.qiniuyun.SK
            );
        }
    }
    async getAuth() {
        return this.qn;
    }
}
class Qiniu {
    private qn;
    constructor() {
        this.qn = new AuthSDK();
    }
    async getBucketManager(config?: qiniu.conf.Config) {
        const _config = new qiniu.conf.Config();
        return new qiniu.rs.BucketManager(await this.qn.getAuth(), {
            ..._config,
            ...config,
        });
    }
    async getData({ dist, formate }: { dist?: string; formate?: boolean }) {
        const bm = await this.getBucketManager();
        return new Promise<QiniuData>((res: any, rej: any) => {
            bm.listPrefix(
                config.space,
                {
                    delimiter: "/",
                    // 文件访问名前缀（即空间名）
                    prefix: dist && `${dist}`,
                },
                (e, respBody) => {
                    if (e) {
                        rej(e);
                    }
                    const { items = [], commonPrefixes } = respBody;
                    res({
                        data: !formate
                            ? items
                            : items
                                  .sort(
                                      (a: QiniuItem, b: QiniuItem) =>
                                          b.putTime - a.putTime
                                  )
                                  .reduce((total: any[], item: QiniuItem) => {
                                      // 过滤当前目录的根路径 因为没有这张图
                                      item.key !== dist &&
                                          total.push({
                                              ...item,
                                              url: `${
                                                  _.isDev() ? "http" : "https"
                                              }://${config.domain}/${item.key}`,
                                              currentDist: dist || "/",
                                          });
                                      return total;
                                  }, []),
                        total: items.length,
                        dist: (commonPrefixes && [...commonPrefixes]) || [],
                    });
                }
            );
        });
    }
}
export default new Qiniu();
