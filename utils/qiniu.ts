import qiniu from "qiniu";
import config from "../config";
import { QiniuData, QiniuItem } from "../types";
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
    getData({ dist, formate }: { dist?: string; formate?: boolean }) {
        const bm = this.getBucketManager();
        return new Promise<QiniuData>((res: any, rej: any) => {
            bm.listPrefix(
                config.space,
                {
                    delimiter: "/",
                    // 文件访问名前缀（即空间名）
                    prefix: dist && `${dist}`,
                },
                (e, respBody, respInfo) => {
                    if (e) {
                        rej(e);
                    }
                    const { items = [], commonPrefixes } = respBody;
                    res({
                        data: !formate
                            ? items
                            : items.reduce((total: any[], item: QiniuItem) => {
                                  // 过滤当前目录的根路径 因为没有这张图
                                  item.key !== dist &&
                                      total.push({
                                          ...item,
                                          url: `${
                                              _.isDev() ? "http" : "https"
                                          }://${config.domain}/${item.key}`,
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
export default new Qiniu(config.qiniuyun.AK, config.qiniuyun.SK);
