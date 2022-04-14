import { diff } from "json-diff";
import { marked } from "marked";
import { NextPage } from "next";
import React, { ReactElement, useState } from "react";
import BackUp from "../layouts/BackUp";
import { CommObj, LayoutType } from "../types";
interface InputCodeProps {
    onChange: (val: string) => void;
    value: string;
}

const renderCode = (codeString: string) => {
    const html = marked.parse("```js" + codeString + "```");
    return html;
};

const formatResult = (resMap: CommObj) => {
    if (null) return [];
    return Object.keys(resMap).map((keyItem) => {
        const item = keyItem?.split("__");
        const key = item?.[0];
        const status = item?.[1];
        const val = resMap[keyItem];
        return {
            key,
            val,
            status,
        };
    });
};

const InputCode = (props: InputCodeProps) => {
    const { onChange, value } = props;
    return (
        <div className="mockup-code h-full text-center">
            <textarea
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                }}
                placeholder="请输入json字符串"
                className="textarea focus:outline-none text-left bg-[#3D4451] px-4 w-full h-full  resize-none"
            />
        </div>
    );
};

const renderVal = (val: any) => {
    if (typeof val === "object") {
        return (
            <code className="whitespace-normal break-words w-full">
                {JSON.stringify(val)}
            </code>
        );
    }
    return <code>{val}</code>;
};

const JsonEdit: NextPage<any> & LayoutType = () => {
    // json
    const [one, setOne] = useState("");
    // json
    const [two, setTwo] = useState("");
    // 输出不同
    const [diffRes, setDiffRes] = useState<CommObj>({});
    return (
        <div className="grid grid-rows-6 grid-flow-col gap-5 h-screen w-screen p-4 relative">
            <div className="row-span-3 col-span-1">
                <InputCode value={one} onChange={setOne} />
            </div>
            <div className="row-span-3 col-span-1 text-center">
                <InputCode value={two} onChange={setTwo} />
            </div>
            <div className="row-span-1">
                <div className="grid grid-cols-5 gap-1">
                    <button
                        className="btn"
                        onClick={() => {
                            if (!one.trim().length || !two.trim().length) {
                                alert("不能为空");
                                return;
                            }
                            try {
                                const _one = JSON.parse(one);
                                const _two = JSON.parse(two);
                                console.log(
                                    diff(_one, _two, {
                                        raw: true,
                                    })
                                );
                                console.log(
                                    formatResult(
                                        diff(_one, _two, {
                                            raw: true,
                                        })
                                    )
                                );
                                setDiffRes(
                                    formatResult(
                                        diff(_one, _two, {
                                            raw: true,
                                        })
                                    )
                                );
                            } catch (error) {
                                console.log(error);
                                alert("检查json格式");
                            }
                        }}>
                        diff
                    </button>
                    <button
                        className="btn"
                        onClick={() => {
                            setOne(renderCode(one));
                        }}>
                        format
                    </button>
                    <button
                        className="btn"
                        onClick={() => {
                            setOne("");
                            setTwo("");
                        }}>
                        clear
                    </button>
                </div>
            </div>
            <div className="row-span-5 col-span-1">
                <div className="mockup-code h-full w-full break-all">
                    {diffRes.length ? (
                        <div className="p-4">
                            {"{"}
                            {diffRes.map((item: any, i: number) => {
                                const add = item.status === "added";
                                return (
                                    <div
                                        key={i}
                                        className={`${
                                            add
                                                ? "text-green-600"
                                                : "text-red-600"
                                        }`}>
                                        <pre data-prefix={add ? "+" : "-"}>
                                            <code>{item.key}</code>
                                            <code>:</code>
                                            {renderVal(item.val)}
                                            <code>,</code>
                                        </pre>
                                    </div>
                                );
                            })}
                            {"}"}
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};
export default JsonEdit;

JsonEdit.getLayout = (page: ReactElement) => {
    return <BackUp>{page}</BackUp>;
};
