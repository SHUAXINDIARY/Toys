import { diff } from "json-diff";
import { NextPage } from "next";
import React, { ReactElement, useState } from "react";
import { IAceOptions } from "react-ace";
import { Editor } from "../components/index";
import BackUp from "../layouts/BackUp";
import { LayoutType } from "../types";
interface InputCodeProps {
    onChange: (val: string) => void;
    value: string;
    options?: IAceOptions;
}

// 格式化json
const formatCode = (str: string) => {
    try {
        return JSON.stringify(JSON.parse(str), null, 4);
    } catch (error) {
        console.error(error);
        return str;
    }
};

// 输入组件
const InputCode = (props: InputCodeProps) => {
    const { onChange, value, options } = props;
    return (
        <div className="mockup-code h-full text-center bg-[#1d1f21]">
            <Editor
                options={options}
                value={value}
                onChange={onChange}
                placeholder="请输入JSON字符串"
            />
        </div>
    );
};

interface DiffOptionProps {
    // Compare only the keys, ignore the differences in values
    onlyKey?: boolean;
    // Display raw JSON encoding of the diff
    rawJson?: boolean;
}

const JsonEdit: NextPage<any> & LayoutType = () => {
    // json
    const [one, setOne] = useState("");
    // json
    const [two, setTwo] = useState("");
    // 输出不同
    const [diffRes, setDiffRes] = useState<string>();
    // ace配置
    const [editorOptions, setEditorOptions] = useState<IAceOptions>({
        showLineNumbers: true,
        showGutter: true,
        useWorker: false,
    });
    const [diffOptions, setDiffOptions] = useState<DiffOptionProps>({
        onlyKey: false,
        rawJson: true,
    });
    return (
        <div className="flex bg-white">
            <div className="h-screen w-1/12 text-center flex flex-col items-center shadow-2xl">
                <button
                    className="btn w-4/5 mt-5"
                    onClick={() => {
                        if (!one.trim().length || !two.trim().length) {
                            alert("JSON不能为空");
                            return;
                        }
                        try {
                            const _one = JSON.parse(one);
                            const _two = JSON.parse(two);
                            const diffRes = diff(_one, _two, {
                                keysOnly: diffOptions.onlyKey,
                                full: true,
                                // raw: true,
                            });
                            setDiffRes(diffRes);
                        } catch (error) {
                            console.log(error);
                            alert("检查json格式");
                        }
                    }}>
                    diff
                </button>
                <button
                    className="btn w-4/5 mt-5"
                    onClick={() => {
                        one && setOne(formatCode(one));
                        two && setTwo(formatCode(two));
                    }}>
                    format
                </button>
                <button
                    className="btn w-4/5 mt-5"
                    onClick={() => {
                        setOne("");
                        setTwo("");
                    }}>
                    clear
                </button>
                <div className="dropdown dropdown-right ">
                    <label tabIndex={0} className="btn m-1 w-4/5 mt-5">
                        Editor Setting
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-1">
                                        Line Num
                                    </span>
                                    <input
                                        type="checkbox"
                                        checked={editorOptions.showLineNumbers}
                                        className="checkbox"
                                        onChange={() => {
                                            setEditorOptions((val) => {
                                                return {
                                                    ...val,
                                                    showLineNumbers:
                                                        !val.showLineNumbers,
                                                };
                                            });
                                        }}
                                    />
                                </label>
                            </div>
                        </li>
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-1">
                                        Show Gutter
                                    </span>
                                    <input
                                        type="checkbox"
                                        checked={editorOptions.showGutter}
                                        className="checkbox"
                                        onChange={(val) => {
                                            setEditorOptions((val) => {
                                                return {
                                                    ...val,
                                                    showGutter: !val.showGutter,
                                                };
                                            });
                                        }}
                                    />
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="dropdown dropdown-right ">
                    <label tabIndex={0} className="btn m-1 w-4/5 mt-5">
                        Diff Setting
                    </label>
                    <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text mr-1">
                                        Compare Key
                                    </span>
                                    <input
                                        type="checkbox"
                                        checked={diffOptions.onlyKey}
                                        className="checkbox"
                                        onClick={() => {
                                            setDiffOptions((val) => {
                                                return {
                                                    ...val,
                                                    onlyKey: !val.onlyKey,
                                                };
                                            });
                                        }}
                                    />
                                </label>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-rows-6 grid-flow-col gap-5 h-screen w-screen p-4 relative">
                <div className="row-span-3 col-span-1">
                    <InputCode
                        options={editorOptions}
                        value={one}
                        onChange={(val) => {
                            setOne(val.trim());
                        }}
                    />
                </div>
                <div className="row-span-3 col-span-1 text-center">
                    <InputCode
                        options={editorOptions}
                        value={two}
                        onChange={(val) => {
                            setTwo(val.trim());
                        }}
                    />
                </div>
                <div className="row-span-6 col-span-1">
                    <div className="mockup-code h-full w-full break-all bg-[#1d1f21]">
                        <Editor
                            value={formatCode(JSON.stringify(diffRes))}
                            options={editorOptions}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JsonEdit;

JsonEdit.getLayout = (page: ReactElement) => {
    return <BackUp>{page}</BackUp>;
};
