import React, { FC } from "react";
import AceEditor, { IAceEditorProps, IAceOptions } from "react-ace";
require("ace-builds/src-noconflict/mode-json");
require("ace-builds/src-noconflict/theme-tomorrow_night");
require("ace-builds/src-noconflict/theme-github");

const defaultOptions: IAceOptions = {
    useWorker: false,
    showLineNumbers: true,
};

const Editor: FC<
    IAceEditorProps & {
        options?: IAceOptions;
    }
> = (props) => {
    const {
        value,
        onChange,
        placeholder,
        mode = "json",
        options = defaultOptions,
    } = props;
    return (
        <AceEditor
            placeholder={placeholder || ""}
            value={value}
            mode={mode}
            theme="tomorrow_night"
            onChange={onChange}
            fontSize={15}
            width="100%"
            height="100%"
            setOptions={options}
            showPrintMargin={true}
            highlightActiveLine={true}
            tabSize={4}
            wrapEnabled
        />
    );
};

export default Editor;
