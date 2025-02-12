import React from 'react';
import { UnControlled as CodeMirror } from 'react-codemirror2'
import 'codemirror/lib/codemirror.js'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/selection/active-line'//代码高亮
import 'codemirror/addon/fold/foldgutter.css'// 代码折叠
import 'codemirror/addon/fold/foldcode.js'
import 'codemirror/addon/fold/foldgutter.js'
import 'codemirror/addon/fold/brace-fold.js'
import 'codemirror/addon/fold/comment-fold.js'
import 'codemirror/addon/scroll/simplescrollbars.js'//代码滚动
import 'codemirror/addon/scroll/simplescrollbars.css'

const CodeMirrorCom = (props) => {

    const { value = '', height = 500, getEditor = () => {}, onChange = () => {}, mode = 'javascript' } = props

    return (
        <CodeMirror
            editorDidMount={(api) => {
                api.setSize('100%', height)
                getEditor(api)
            }}
            value={value}
            options={{
                lineNumbers: true, //显示行号
                mode: { name: mode, json: true }, //语言
                autofocus: true, //自动获取焦点
                styleActiveLine: true, //光标代码高亮
                theme: 'default', //主题
                scrollbarStyle: 'overlay',
                lineWrapping: true, //代码自动换行
                foldGutter: true,
                gutters: ['CodeMirror-linenumbers','CodeMirrorfoldgutter'], //end
                readOnly: false,
            }}
            onChange={onChange}
        />
    );
}

export default CodeMirrorCom;
  